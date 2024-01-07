/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SubCard2OverridesProps = {
    SubCard2?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 447"?: PrimitiveOverrideProps<ViewProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    Subscription?: PrimitiveOverrideProps<TextProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "image 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SubCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SubCard2OverridesProps | undefined | null;
}>;
export default function SubCard2(props: SubCard2Props): React.ReactElement;
