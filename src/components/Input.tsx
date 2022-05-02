import React, { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = (
  { label, name, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...rest} ref={ref} />
    </div>
  );
};

export default forwardRef(Input);
