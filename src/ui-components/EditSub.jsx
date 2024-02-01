import * as React from "react";
import { useEffect, useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { updateSub } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import {getSub} from "../graphql/queries";

const client = generateClient();

export default function EditSub({ idProp, overrides, ...rest }) {
  // Initialize state for each of the input fields
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [logo, setLogo] = useState("");
  // Navigation action to return to home screen after updating
  const navigateToHome = useNavigateAction({ type: "url", url: "/" });

  // Function to handle the update button click
  const buttonOnClick = async () => {
    try {
      await client.graphql({
        query: updateSub.replaceAll("__typename", ""),
        variables: {
          input: {
            id: idProp,
            Name: name,
            Price: price,
            Logo: logo,
          },
        },
      });
      // Navigate to the home screen after a successful update
      navigateToHome();
    } catch (error) {
      console.error("Error updating subscription:", error);
    }
  };

  // Effect to fetch subscription details when component mounts or idProp changes
  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      try {
        // Placeholder: Implement your logic to fetch subscription details by idProp
        const details = await client.graphql(getSub, { id: idProp });
        const subscription = details.data.getSubscription;
        if (subscription) {
          setName(subscription.Name);
          setPrice(subscription.Price);
          setLogo(subscription.Logo);
        }
      } catch (error) {
        console.error("Error fetching subscription details:", error);
      }
    };

    if (idProp) {
      fetchSubscriptionDetails();
    }
  }, [idProp]);

  return (
    <Flex
      gap="16px"
      direction="column"
      width="304px"
      height="416px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="0px 0px 15px 15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "EditSub")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="616px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            onClick={navigateToHome} // Use navigateToHome for the back/close icon as well
            {...getOverrideProps(overrides, "Frame 444")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              type="close"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Subscription"
            {...getOverrideProps(overrides, "Edit Subscription")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            label="Subscription Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            {...getOverrideProps(overrides, "TextField4046328")}
          ></TextField>
          <TextField
            label="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            {...getOverrideProps(overrides, "TextField4046329")}
          ></TextField>
          <TextField
            label="Subscription Logo"
            value={logo}
            onChange={(event) => setLogo(event.target.value)}
            {...getOverrideProps(overrides, "TextField4046331")}
          ></TextField>
        </Flex>
        <Button
          children="UPDATE"
          onClick={buttonOnClick}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
