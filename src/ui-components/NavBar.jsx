/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import MyIcon from "./MyIcon";
import { Button, Flex, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const frameFourFiveZeroOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useNavigateAction({ type: "url", url: "/NewSub" });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="320px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      borderRadius="15px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <View
        width="42px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        onClick={() => {
          frameFourFiveZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 450")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="6px"
          left="9px"
          padding="0px 0px 0px 0px"
          type="home"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </View>
      <Button
        width="150px"
        height="29px"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="New"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
