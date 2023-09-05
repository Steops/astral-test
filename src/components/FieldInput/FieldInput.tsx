import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react';

interface FieldInputProps {
  type: string | undefined;
  name: string;
  className: string;
  onFocus?: any;
  errorClassName: string;
  placeholder?: string;
  titleClassName?: string;
  title?: string;
  disabled?: boolean;
  as?: string;
  options?: string[];
  value?: string;
}

const FieldInput: FC<FieldInputProps> = ({
  type,
  name,
  className,
  onFocus,
  errorClassName,
  placeholder,
  titleClassName,
  title,
  disabled,
  as,
  options,
}) => (
  <>
    <Field
      type={type}
      name={name}
      className={className}
      onFocus={onFocus}
      placeholder={placeholder}
      disabled={disabled}
      as={as}
    >
      {options &&
        options.map((option, index) => <option key={index}>{option}</option>)}
    </Field>
    <ErrorMessage name={name} className={errorClassName} component='div' />
    {title && <span className={titleClassName}>{title}</span>}
  </>
);

export { FieldInput };
