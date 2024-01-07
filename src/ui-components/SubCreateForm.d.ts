/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SubCreateFormInputValues = {
    Name?: string;
    Price?: string;
    Logo?: string;
};
export declare type SubCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubCreateFormOverridesProps = {
    SubCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubCreateFormProps = React.PropsWithChildren<{
    overrides?: SubCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SubCreateFormInputValues) => SubCreateFormInputValues;
    onSuccess?: (fields: SubCreateFormInputValues) => void;
    onError?: (fields: SubCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubCreateFormInputValues) => SubCreateFormInputValues;
    onValidate?: SubCreateFormValidationValues;
} & React.CSSProperties>;
export default function SubCreateForm(props: SubCreateFormProps): React.ReactElement;
