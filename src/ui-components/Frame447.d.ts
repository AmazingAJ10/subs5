/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Frame447OverridesProps = {
    Frame447?: PrimitiveOverrideProps<FlexProps>;
    Subscription?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame447Props = React.PropsWithChildren<Partial<FlexProps> & {
    sub?: any;
} & {
    overrides?: Frame447OverridesProps | undefined | null;
}>;
export default function Frame447(props: Frame447Props): React.ReactElement;
