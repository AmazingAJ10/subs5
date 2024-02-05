/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import MyIcon from "./MyIcon";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { subR, overrides, ...rest } = props;
  const frameFourFiveZeroOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useNavigateAction({ type: "url", url: "/new" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="304px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      borderRadius="15px 15px 0px 0px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="36px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="home"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Flex>
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
