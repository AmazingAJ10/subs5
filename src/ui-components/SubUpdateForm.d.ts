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
export declare type SubUpdateFormInputValues = {
    Name?: string;
    Price?: string;
    Logo?: string;
};
export declare type SubUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Logo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubUpdateFormOverridesProps = {
    SubUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Logo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sub?: any;
    onSubmit?: (fields: SubUpdateFormInputValues) => SubUpdateFormInputValues;
    onSuccess?: (fields: SubUpdateFormInputValues) => void;
    onError?: (fields: SubUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubUpdateFormInputValues) => SubUpdateFormInputValues;
    onValidate?: SubUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubUpdateForm(props: SubUpdateFormProps): React.ReactElement;
