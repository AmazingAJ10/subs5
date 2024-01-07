/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteSub } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function SubCard(props) {
  const { sub, overrides, ...rest } = props;
  const imageOneOnClick = async () => {
    await client.graphql({
      query: deleteSub.replaceAll("__typename", ""),
      variables: {
        input: {
          id: sub?.id,
        },
      },
    });
  };
  const imageTwoOnClick = useNavigateAction({ type: "url", url: "/EditSub" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="320px"
      height="76px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      borderRadius="15px"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SubCard")}
      {...rest}
    >
      <Image
        width="60px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="50px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <View
        width="172px"
        height="119px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 447")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="224px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="59.5px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Price"
          {...getOverrideProps(overrides, "Price")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="22px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="224px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="32.5px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Subscription"
          {...getOverrideProps(overrides, "Subscription")}
        ></Text>
      </View>
      <Image
        width="24px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        onClick={() => {
          imageOneOnClick();
        }}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Image
        width="17px"
        height="27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        onClick={() => {
          imageTwoOnClick();
        }}
        {...getOverrideProps(overrides, "image 2")}
      ></Image>
    </Flex>
  );
}
