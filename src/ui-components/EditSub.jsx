import * as React from "react";
import { useEffect, useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { updateSub } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import {getSub} from "../graphql/queries";
import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { fetchByPath, validateField, processFile} from "./utils";

const client = generateClient();
export default function EditSub(props) {
  const {
    idProp,
    sub: subModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Price: "",
    Logo: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [Logo, setLogo] = React.useState(initialValues.Logo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = subRecord
      ? { ...initialValues, ...subRecord }
      : initialValues;
    setName(cleanValues.Name);
    setPrice(cleanValues.Price);
    setLogo(cleanValues.Logo);
    setErrors({});
  };
  const [subRecord, setSubRecord] = React.useState(subModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSub.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSub
        : subModelProp;
      setSubRecord(record);
    };
    queryData();
  }, [idProp, subModelProp]);
  React.useEffect(resetStateValues, [subRecord]);
  const validations = {
    Name: [],
    Price: [],
    Logo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  
   const navigateToHome = useNavigateAction({ type: "url", url: "/" });

  // Function to handle the update button click
  const buttonOnClick = async () => {
    try {
      await client.graphql({
        query: updateSub.replaceAll("__typename", ""),
        variables: {
          input: {
            id: idProp,
            Name: Name,
            Price: Price,
            Logo: Logo,
          },
        },
      });
      // Navigate to the home screen after a successful update
      navigateToHome();
    } catch (error) {
      console.error("Error updating subscription:", error);
    }
  };

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
            value={Name}
            onChange={(event) => setName(event.target.value)}
            {...getOverrideProps(overrides, "TextField4046328")}
          ></TextField>
          <TextField
            label="Price"
            value={Price}
            onChange={(event) => setPrice(event.target.value)}
            {...getOverrideProps(overrides, "TextField4046329")}
          ></TextField>
          {<TextField
            label="Subscription Logo"
            value={Logo}
            onChange={(event) => setLogo(event.target.value)}
            {...getOverrideProps(overrides, "TextField4046331")}
          ></TextField>} 
          
          {/* <Field             // This is Storage Manager to upload images which I will try later.
          label={"Image"}
          isRequired={false}
          isReadOnly={false}
          >
          <StorageManager
          onUploadSuccess={({ key }) => {
            setLogo(
              key
            );
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "image")}
          ></StorageManager>
          </Field> */}
        </Flex>
        <Button
          children="Update"
          onClick={buttonOnClick}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}