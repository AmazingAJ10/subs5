// // import * as React from "react";
// // import { useEffect, useState } from "react";
// // import { getOverrideProps, useNavigateAction, fetchByPath, validateField } from "./utils";
// // import { generateClient } from "aws-amplify/api";
// // import { updateSub } from "../graphql/mutations";
// // import MyIcon from "./MyIcon";
// // import { Button, Flex, Grid, Text, TextField, View } from "@aws-amplify/ui-react";
// // import {getSub} from "../graphql/queries";

// // const client = generateClient();

// // export default function EditSub(props) {
// //   const {
// //     id: idProp,
// //     sub: subModelProp,
// //     onSuccess,
// //     onError,
// //     onSubmit,
// //     onValidate,
// //     onChange,
// //     overrides,
// //     ...rest
// //   } = props;
// //   const initialValues = {
// //     Name: "",
// //     Price: "",
// //     Logo: "",
// //   };
// //   const [Name, setName] = React.useState(initialValues.Name);
// //   const [Price, setPrice] = React.useState(initialValues.Price);
// //   const [Logo, setLogo] = React.useState(initialValues.Logo);
// //   const [errors, setErrors] = React.useState({});
// //   const resetStateValues = () => {
// //     const cleanValues = subRecord
// //       ? { ...initialValues, ...subRecord }
// //       : initialValues;
// //     setName(cleanValues.Name);
// //     setPrice(cleanValues.Price);
// //     setLogo(cleanValues.Logo);
// //     setErrors({});
// //   };
// //   const [subRecord, setSubRecord] = React.useState(subModelProp);
// //   React.useEffect(() => {
// //     const queryData = async () => {
// //       const record = idProp
// //         ? (
// //             await client.graphql({
// //               query: getSub.replaceAll("__typename", ""),
// //               variables: { id: idProp },
// //             })
// //           )?.data?.getSub
// //         : subModelProp;
// //       setSubRecord(record);
// //     };
// //     queryData();
// //   }, [idProp, subModelProp]);
// //   React.useEffect(resetStateValues, [subRecord]);
// //   const validations = {
// //     Name: [],
// //     Price: [],
// //     Logo: [],
// //   };
// //   const runValidationTasks = async (
// //     fieldName,
// //     currentValue,
// //     getDisplayValue
// //   ) => {
// //     const value =
// //       currentValue && getDisplayValue
// //         ? getDisplayValue(currentValue)
// //         : currentValue;
// //     let validationResponse = validateField(value, validations[fieldName]);
// //     const customValidator = fetchByPath(onValidate, fieldName);
// //     if (customValidator) {
// //       validationResponse = await customValidator(value, validationResponse);
// //     }
// //     setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
// //     return validationResponse;
// //   };
// //   // Initialize state for each of the input fields
// //   // const [name, setName] = useState("");
// //   // const [price, setPrice] = useState("");
// //   // const [logo, setLogo] = useState("");
// //   // // Navigation action to return to home screen after updating
// //    const navigateToHome = useNavigateAction({ type: "url", url: "/" });

// //   // // Function to handle the update button click
// //   // const buttonOnClick = async () => {
// //   //   try {
// //   //     await client.graphql({
// //   //       query: updateSub.replaceAll("__typename", ""),
// //   //       variables: {
// //   //         input: {
// //   //           id: idProp,
// //   //           Name: name,
// //   //           Price: price,
// //   //           Logo: logo,
// //   //         },
// //   //       },
// //   //     });
// //   //     // Navigate to the home screen after a successful update
// //   //     navigateToHome();
// //   //   } catch (error) {
// //   //     console.error("Error updating subscription:", error);
// //   //   }
// //   // };

// //   // // Effect to fetch subscription details when component mounts or idProp changes
// //   // useEffect(() => {
// //   //   const fetchSubscriptionDetails = async () => {
// //   //     try {
// //   //       // Placeholder: Implement your logic to fetch subscription details by idProp
// //   //       console.log("hello");
// //   //       const details = await client.graphql(getSub, { id: idProp });
// //   //       const subscription = details.data.getSubscription;
// //   //       console.log("sub=" +subscription);
// //   //       console.log(subscription?.Name);
        
// //   //       if (subscription) {
// //   //         setName(subscription.Name);
// //   //         setPrice(subscription.Price);
// //   //         setLogo(subscription.Logo);
// //   //       }
// //   //     } catch (error) {
// //   //       console.error("Error fetching subscription details:", error);
// //   //     }
// //   //   };
// //   //     console.log("id"+idProp);
// //   //   if (idProp) {
// //   //     fetchSubscriptionDetails();
// //   //   }
// //   // }, [idProp]);

// //   return (
// //     // <Flex
// //     //   gap="16px"
// //     //   direction="column"
// //     //   width="304px"
// //     //   height="416px"
// //     //   justifyContent="flex-start"
// //     //   alignItems="flex-start"
// //     //   position="relative"
// //     //   borderRadius="0px 0px 15px 15px"
// //     //   padding="0px 0px 0px 0px"
// //     //   backgroundColor="rgba(255,255,255,1)"
// //     //   {...getOverrideProps(overrides, "EditSub")}
// //     //   {...rest}
// //     // >
// //     //   <Flex
// //     //     gap="24px"
// //     //     direction="column"
// //     //     width="unset"
// //     //     height="616px"
// //     //     justifyContent="flex-start"
// //     //     alignItems="flex-start"
// //     //     shrink="0"
// //     //     alignSelf="stretch"
// //     //     position="relative"
// //     //     padding="24px 24px 24px 24px"
// //     //     {...getOverrideProps(overrides, "Content")}
// //     //   >
// //     //     <Flex
// //     //       gap="16px"
// //     //       direction="row"
// //     //       width="unset"
// //     //       height="unset"
// //     //       justifyContent="flex-start"
// //     //       alignItems="center"
// //     //       shrink="0"
// //     //       alignSelf="stretch"
// //     //       position="relative"
// //     //       padding="0px 0px 0px 0px"
// //     //       {...getOverrideProps(overrides, "Edit Profile")}
// //     //     >
// //     //       <View
// //     //         width="24px"
// //     //         height="24px"
// //     //         display="block"
// //     //         gap="unset"
// //     //         alignItems="unset"
// //     //         justifyContent="unset"
// //     //         shrink="0"
// //     //         position="relative"
// //     //         padding="0px 0px 0px 0px"
// //     //         onClick={navigateToHome} // Use navigateToHome for the back/close icon as well
// //     //         {...getOverrideProps(overrides, "Frame 444")}
// //     //       >
// //     //         <MyIcon
// //     //           width="24px"
// //     //           height="24px"
// //     //           display="block"
// //     //           gap="unset"
// //     //           alignItems="unset"
// //     //           justifyContent="unset"
// //     //           overflow="hidden"
// //     //           position="absolute"
// //     //           top="0px"
// //     //           left="0px"
// //     //           padding="0px 0px 0px 0px"
// //     //           type="close"
// //     //           {...getOverrideProps(overrides, "MyIcon")}
// //     //         ></MyIcon>
// //     //       </View>
// //     //       <Text
// //     //         fontFamily="Inter"
// //     //         fontSize="16px"
// //     //         fontWeight="700"
// //     //         color="rgba(13,26,38,1)"
// //     //         lineHeight="20px"
// //     //         textAlign="left"
// //     //         display="block"
// //     //         direction="column"
// //     //         justifyContent="unset"
// //     //         width="unset"
// //     //         height="unset"
// //     //         gap="unset"
// //     //         alignItems="unset"
// //     //         shrink="0"
// //     //         position="relative"
// //     //         padding="0px 0px 0px 0px"
// //     //         whiteSpace="pre-wrap"
// //     //         children="Edit Subscription"
// //     //         {...getOverrideProps(overrides, "Edit Subscription")}
// //     //       ></Text>
// //     //     </Flex>
// //     //     <Flex
// //     //       gap="16px"
// //     //       direction="column"
// //     //       width="unset"
// //     //       height="unset"
// //     //       justifyContent="flex-start"
// //     //       alignItems="flex-start"
// //     //       shrink="0"
// //     //       alignSelf="stretch"
// //     //       position="relative"
// //     //       padding="0px 0px 0px 0px"
// //     //       {...getOverrideProps(overrides, "Forms")}
// //     //     >
// //           <Grid
// //       as="form"
// //       rowGap="15px"
// //       columnGap="15px"
// //       padding="20px"
// //       onSubmit={async (event) => {
// //         event.preventDefault();
// //         let modelFields = {
// //           Name: Name ?? null,
// //           Price: Price ?? null,
// //           Logo: Logo ?? null,
// //         };
// //         const validationResponses = await Promise.all(
// //           Object.keys(validations).reduce((promises, fieldName) => {
// //             if (Array.isArray(modelFields[fieldName])) {
// //               promises.push(
// //                 ...modelFields[fieldName].map((item) =>
// //                   runValidationTasks(fieldName, item)
// //                 )
// //               );
// //               return promises;
// //             }
// //             promises.push(
// //               runValidationTasks(fieldName, modelFields[fieldName])
// //             );
// //             return promises;
// //           }, [])
// //         );
// //         if (validationResponses.some((r) => r.hasError)) {
// //           return;
// //         }
// //         if (onSubmit) {
// //           modelFields = onSubmit(modelFields);
// //         }
// //         try {
// //           Object.entries(modelFields).forEach(([key, value]) => {
// //             if (typeof value === "string" && value === "") {
// //               modelFields[key] = null;
// //             }
// //           });
// //           await client.graphql({
// //             query: updateSub.replaceAll("__typename", ""),
// //             variables: {
// //               input: {
// //                 id: subRecord.id,
// //                 ...modelFields,
// //               },
// //             },
// //           });
// //           if (onSuccess) {
// //             onSuccess(modelFields);
// //           }
// //         } catch (err) {
// //           if (onError) {
// //             const messages = err.errors.map((e) => e.message).join("\n");
// //             onError(modelFields, messages);
// //           }
// //         }
// //       }}
// //       {...getOverrideProps(overrides, "SubUpdateForm")}
// //       {...rest}
// //       ></Grid>
// //     </Grid
// //           <TextField
// //             label="Name"
// //             isRequired={false}
// //             isReadOnly={false}
// //             value={Name}
// //             onChange={(e) => {
// //               let { value } = e.target;
// //               if (onChange) {
// //                 const modelFields = {
// //                   Name: value,
// //                   Price,
// //                   Logo,
// //                 };
// //                 const result = onChange(modelFields);
// //                 value = result?.Name ?? value;
// //               }
// //               if (errors.Name?.hasError) {
// //                 runValidationTasks("Name", value);
// //               }
// //               setName(value);
// //             }}
// //             onBlur={() => runValidationTasks("Name", Name)}
// //             errorMessage={errors.Name?.errorMessage}
// //             hasError={errors.Name?.hasError}
// //             {...getOverrideProps(overrides, "Name")}
// //           ></TextField>
// //           <TextField
// //             label="Price"
// //             isRequired={false}
// //             isReadOnly={false}
// //             value={Price}
// //             onChange={(e) => {
// //               let { value } = e.target;
// //               if (onChange) {
// //                 const modelFields = {
// //                   Name,
// //                   Price: value,
// //                   Logo,
// //                 };
// //                 const result = onChange(modelFields);
// //                 value = result?.Price ?? value;
// //               }
// //               if (errors.Price?.hasError) {
// //                 runValidationTasks("Price", value);
// //               }
// //               setPrice(value);
// //             }}
// //             onBlur={() => runValidationTasks("Price", Price)}
// //             errorMessage={errors.Price?.errorMessage}
// //             hasError={errors.Price?.hasError}
// //             {...getOverrideProps(overrides, "Price")}
// //           ></TextField>
// //           <TextField
// //            label="Logo"
// //            isRequired={false}
// //            isReadOnly={false}
// //            value={Logo}
// //            onChange={(e) => {
// //              let { value } = e.target;
// //              if (onChange) {
// //                const modelFields = {
// //                  Name,
// //                  Price,
// //                  Logo: value,
// //                };
// //                const result = onChange(modelFields);
// //                value = result?.Logo ?? value;
// //              }
// //              if (errors.Logo?.hasError) {
// //                runValidationTasks("Logo", value);
// //              }
// //              setLogo(value);
// //            }}
// //            onBlur={() => runValidationTasks("Logo", Logo)}
// //            errorMessage={errors.Logo?.errorMessage}
// //            hasError={errors.Logo?.hasError}
// //            {...getOverrideProps(overrides, "Logo")}
// //           ></TextField>
// //         <Button
// //           children="Update"
// //           type="submit"
// //           variation="primary"
// //           isDisabled={
// //             !(idProp || subModelProp) ||
// //             Object.values(errors).some((e) => e?.hasError)
// //           }
// //           {...getOverrideProps(overrides, "SubmitButton")}
// //         ></Button>
// //       </Flex>
// //     </Flex>
// //     </Grid>
// //   );
// // }


// import * as React from "react";
// import { useEffect, useState } from "react";
// import { getOverrideProps, useNavigateAction, fetchByPath, validateField } from "./utils";
// import { generateClient } from "aws-amplify/api";
// import { updateSub} from "../graphql/mutations"; // Ensure getSub is from mutations if it's a typo or adjust import path accordingly
// import MyIcon from "./MyIcon";
// import {getSub} from "../graphql/queries";
// import { Button, Flex, Grid, Text, TextField, View } from "@aws-amplify/ui-react";

// const client = generateClient();

// export default function EditSub(props) {
//   const {
//     id: idProp,
//     sub: subModelProp,
//     onSuccess,
//     onError,
//     onSubmit,
//     onValidate,
//     onChange,
//     overrides,
//     ...rest
//   } = props;

//   const initialValues = {
//     Name: "",
//     Price: "",
//     Logo: "",
//   };

//   const [Name, setName] = useState(initialValues.Name);
//   const [Price, setPrice] = useState(initialValues.Price);
//   const [Logo, setLogo] = useState(initialValues.Logo);
//   const [errors, setErrors] = useState({});
//   const [subRecord, setSubRecord] = useState(subModelProp);

//   useEffect(() => {
//     const queryData = async () => {
//       const record = idProp
//         ? await client.graphql({
//             query: getSub.replaceAll("__typename", ""),
//             variables: { id: idProp },
//           }).then(response => response.data.getSub)
//         : subModelProp;
//       setSubRecord(record);
//     };
//     queryData();
//   }, [idProp, subModelProp]);

//   useEffect(() => {
//     setName(subRecord?.Name || initialValues.Name);
//     setPrice(subRecord?.Price || initialValues.Price);
//     setLogo(subRecord?.Logo || initialValues.Logo);
//     setErrors({});
//   }, [subRecord]);

//   const validations = {
//     Name: [],
//     Price: [],
//     Logo: [],
//   };

//   const runValidationTasks = async (fieldName, currentValue) => {
//     const value = currentValue;
//     let validationResponse = validateField(value, validations[fieldName]);
//     const customValidator = fetchByPath(onValidate, fieldName);
//     if (customValidator) {
//       validationResponse = await customValidator(value, validationResponse);
//     }
//     setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: validationResponse }));
//     return validationResponse;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let modelFields = {
//       Name: Name ?? null,
//       Price: Price ?? null,
//       Logo: Logo ?? null,
//     };

//     const validationResponses = await Promise.all(
//       Object.keys(validations).map((fieldName) =>
//         runValidationTasks(fieldName, modelFields[fieldName])
//       )
//     );

//     if (validationResponses.some((r) => r.hasError)) {
//       return;
//     }

//     if (onSubmit) {
//       modelFields = onSubmit(modelFields);
//     }

//     try {
//       Object.entries(modelFields).forEach(([key, value]) => {
//         if (typeof value === "string" && value === "") {
//           modelFields[key] = null;
//         }
//       });

//       await client.graphql({
//         query: updateSub.replaceAll("__typename", ""),
//         variables: {
//           input: {
//             id: subRecord.id,
//             ...modelFields,
//           },
//         },
//       });

//       if (onSuccess) {
//         onSuccess(modelFields);
//       }
//     } catch (err) {
//       if (onError) {
//         const messages = err.errors.map((e) => e.message).join("\n");
//         onError(modelFields, messages);
//       }
//     }
//   };

//   return (
//     <Flex
//       {...getOverrideProps(overrides, "EditSub")}
//       {...rest}
//     >
//       <Grid
//         as="form"
//         rowGap="15px"
//         columnGap="15px"
//         padding="20px"
//         onSubmit={handleSubmit}
//       >
//         <TextField
//           label="Name"
//           isRequired={false}
//           isReadOnly={false}
//           value={Name}
//           onChange={(e) => setName(e.target.value)}
//           onBlur={() => runValidationTasks("Name", Name)}
//           errorMessage={errors.Name?.errorMessage}
//           hasError={errors.Name?.hasError}
//           {...getOverrideProps(overrides, "Name")}
//         />
//         <TextField
//           label="Price"
//           isRequired={false}
//           isReadOnly={false}
//           value={Price}
//           onChange={(e) => setPrice(e.target.value)}
//           onBlur={() => runValidationTasks("Price", Price)}
//           errorMessage={errors.Price?.errorMessage}
//           hasError={errors.Price?.hasError}
//           {...getOverrideProps(overrides, "Price")}
//         />
//         <TextField
//           label="Logo"
//           isRequired={false}
//           isReadOnly={false}
//           value={Logo}
//           onChange={(e) => setLogo(e.target.value)}
//           onBlur={() => runValidationTasks("Logo", Logo)}
//           errorMessage={errors.Logo?.errorMessage}
//           hasError={errors.Logo?.hasError}
//           {...getOverrideProps(overrides, "Logo")}
//         />
//         <Button
//           children="Update"
//           type="submit"
//           variation="primary"
//           isDisabled={
//             !(idProp || subModelProp) ||
//             Object.values(errors).some((e) => e?.hasError)
//           }
//           {...getOverrideProps(overrides, "SubmitButton")}
//         />
//       </Grid>
//     </Flex>
//   );
// }

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
        console.log("hello");
        const details = await client.graphql(getSub, { id: idProp });
        const subscription = details.data.getSubscription;
        console.log("sub=" +subscription);
        console.log(subscription?.Name);
        
        if (subscription) {
          setName(subscription.Name);
          setPrice(subscription.Price);
          setLogo(subscription.Logo);
        }
      } catch (error) {
        console.error("Error fetching subscription details:", error);
      }
    };
      console.log("id"+idProp);
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
          children="Update"
          onClick={buttonOnClick}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}

