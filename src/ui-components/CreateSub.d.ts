/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateSubInputValues = {
    Name?: string;
    Price?: string;
    Field0?: string;
};
export declare type CreateSubValidationValues = {
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateSubOverridesProps = {
    CreateSubGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type CreateSubProps = React.PropsWithChildren<{
    overrides?: CreateSubOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateSubInputValues) => CreateSubInputValues;
    onSuccess?: (fields: CreateSubInputValues) => void;
    onError?: (fields: CreateSubInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateSubInputValues) => CreateSubInputValues;
    onValidate?: CreateSubValidationValues;
} & React.CSSProperties>;
export default function CreateSub(props: CreateSubProps): React.ReactElement;
