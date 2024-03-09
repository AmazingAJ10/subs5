/* eslint-disable */
import * as React from "react";
import { listSubs } from "../graphql/queries";
import SubCard from "./SubCard";
import { getOverrideProps } from "./utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { getUrl } from "@aws-amplify/storage"; // Ensure you've imported getUrl correctly

const nextToken = {};
const apiCache = {};
const client = generateClient();

export default function SubCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 6;
  const isPaginated = false; // Ensure this is intentionally set to false

  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);

  React.useEffect(() => {
    setIsApiPagination(!itemsProp);
  }, [itemsProp]);

  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };

  const loadPage = async (page) => {
    let result; // Moved declaration outside the loop
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];

    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = { limit: pageSize };
      if (newNext) {
        variables["nextToken"] = newNext;
      }

      try {
        result = (await client.graphql({
          query: listSubs.replaceAll("__typename", ""),
          variables,
        })).data.listSubs;
        newCache.push(...result.items);
        newNext = result.nextToken;

        // Handling images asynchronously
        const subsWithImages = await Promise.all(
          result.items.map(async (sub) => {
            if (sub.image) {
              const getUrlResult = await getUrl({ key: sub.image });
              sub.image = getUrlResult.url;
            }
            return sub;
          })
        );

        // Ensure the updated items with images are pushed
        apiCache[instanceKey].push(...subsWithImages);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        return; // Exit if there's an error
      }
    }

    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;
    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    nextToken[instanceKey] = newNext;
  };

  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);

  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);

  return (
    <div>
      <Collection
        type="list"
        searchPlaceholder="Search..."
        direction="column"
        justifyContent="left"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "SubCardCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <SubCard
              sub={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></SubCard>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
