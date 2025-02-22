import { Label as ShadCNLabel } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

interface RootProps<T extends FieldValues>
  extends React.FormHTMLAttributes<HTMLFormElement> {
  formMethods: UseFormReturn<T>;
}

/**
 * Base component for creating forms.
 * Wraps children elements with `FormProvider` from "react-hook-form" and a base `form` element.
 * @param {React.ReactNode} children - any children components (form fields)
 * @param {UseFormReturn<T>} formMethods - returned the `useForm()` hook from "react-hook-form"
 * @param {React.FormHTMLAttributes<HTMLFormElement>} formProps - extends `HTMLFormElement` properties
 */
function Root<T extends FieldValues>({
  formMethods,
  children,
  ...rest
}: RootProps<T>) {
  return (
    <FormProvider {...formMethods}>
      <form {...rest}>{children}</form>
    </FormProvider>
  );
}
Root.displayName = "Form Root";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

/**
 * Defines a field within a `Form` component.
 * Builds a controlled form field with `Controller` component from "react-hook-form".
 * Provides field name to child components via context.
 * @param {ControllerProps<TFieldValues, TName>} props - extends `Controller` props from "react-hook-form".  Documentation: {@link https://react-hook-form.com/docs/usecontroller/controller}
 */
const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};
Field.displayName = "FormField";

type FormItemContextValue = {
  id: string;
  disabled?: boolean;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

/**
 * Wrapper around form elements for accessibility purposes.
 * Gives form elements an accessibility `id` via context.
 * @param {BoxProps} props - extends `BoxProps`
 */
const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { disabled?: boolean }
>(({ className, disabled, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id, disabled }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
Item.displayName = "FormItem";

/**
 * Convenient hook used to get a form field's state with additional accessibility ID properties.
 * @returns {object} field state with additional `id` properties for accessibility.
 */
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <Form.Field>");
  }

  const { id, disabled } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    disabled,
    ...fieldState,
  };
};

/**
 * Directly wraps any form input component.
 * Gives child component accessibility properties.
 * @param {React.RefAttributes<HTMLElement>} props - extends `HTMLElement` properties
 */
const Control = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId, disabled } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
      // Use type assertion here
      {...({ disabled } as React.HTMLAttributes<HTMLElement>)}
    />
  );
});
Control.displayName = "FormControl";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId, disabled } = useFormField();

  return (
    <ShadCNLabel
      ref={ref}
      className={cn(
        error && "text-destructive",
        disabled && "cursor-not-allowed opacity-70",
        className
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
Label.displayName = "FormLabel";

export interface ErrorMessage {
  row?: number;
  message: string;
}

const Message = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
Message.displayName = "FormMessage";

 
export { Control, Field, Item, Label, Message, Root, useFormField };
