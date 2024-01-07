/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditSubOverridesProps = {
    EditSub?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "Edit Subscription"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4046328?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4046329?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4046331?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type EditSubProps = React.PropsWithChildren<Partial<FlexProps> & {
    sub?: any;
} & {
    overrides?: EditSubOverridesProps | undefined | null;
}>;
export default function EditSub(props: EditSubProps): React.ReactElement;
