/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { updateSub } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function EditSub(props) {
  const { sub, overrides, ...rest } = props;
  const [
    textFieldFourZeroFourSixThreeTwoEightValue,
    setTextFieldFourZeroFourSixThreeTwoEightValue,
  ] = useState("");
  const [
    textFieldFourZeroFourSixThreeTwoNineValue,
    setTextFieldFourZeroFourSixThreeTwoNineValue,
  ] = useState("");
  const [
    textFieldFourZeroFourSixThreeThreeOneValue,
    setTextFieldFourZeroFourSixThreeThreeOneValue,
  ] = useState("");
  const frameFourFourFourOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = async () => {
    await client.graphql({
      query: updateSub.replaceAll("__typename", ""),
      variables: {
        input: {
          Name: textFieldFourZeroFourSixThreeTwoEightValue,
          Price: textFieldFourZeroFourSixThreeTwoNineValue,
          Logo: textFieldFourZeroFourSixThreeThreeOneValue,
          id: sub?.id,
        },
      },
    });
  };
  useEffect(() => {
    if (
      textFieldFourZeroFourSixThreeTwoEightValue === "" &&
      sub !== undefined &&
      sub?.Name !== undefined
    )
      setTextFieldFourZeroFourSixThreeTwoEightValue(sub?.Name);
  }, [sub]);
  useEffect(() => {
    if (
      textFieldFourZeroFourSixThreeTwoNineValue === "" &&
      sub !== undefined &&
      sub?.Price !== undefined
    )
      setTextFieldFourZeroFourSixThreeTwoNineValue(sub?.Price);
  }, [sub]);
  useEffect(() => {
    if (
      textFieldFourZeroFourSixThreeThreeOneValue === "" &&
      sub !== undefined &&
      sub?.Logo !== undefined
    )
      setTextFieldFourZeroFourSixThreeThreeOneValue(sub?.Logo);
  }, [sub]);
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="616px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="15px"
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
            onClick={() => {
              frameFourFourFourOnClick();
            }}
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
            width="unset"
            height="unset"
            label="Subscription Name"
            placeholder="Netflix, Hulu, etc."
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourSixThreeTwoEightValue}
            onChange={(event) => {
              setTextFieldFourZeroFourSixThreeTwoEightValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4046328")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Price"
            placeholder="$10.99"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourSixThreeTwoNineValue}
            onChange={(event) => {
              setTextFieldFourZeroFourSixThreeTwoNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4046329")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Subscription Logo"
            placeholder="upload image"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourSixThreeThreeOneValue}
            onChange={(event) => {
              setTextFieldFourZeroFourSixThreeThreeOneValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField4046331")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="UPDATE"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
