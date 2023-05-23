"use client"
import React from "react";
import IMaskInput from 'imask';
import { SimpleInputOption } from '../types';

interface Props {
  inputData: SimpleInputOption;
  value?: string;
  onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  key: string;
}

export default function InputClient({ inputData, ...others }: Props) {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const mask = createMask(inputData, ref);
    return () => cleanup(mask);
  }, [inputData]);

  return renderInputStructure({ inputData, ref, ...others });
}

const createMask = (
    inputData: SimpleInputOption,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    if (ref.current && inputData.mask) {
      const inputElement = ref.current;
      const mask = IMaskInput(inputElement, inputData.mask);
      (inputElement as any).masked = mask; // Use type assertion to bypass the type error
      return mask;
    }
  };

const cleanup = (mask?: IMaskInput.InputMask<IMaskInput.AnyMaskedOptions>) => {
  mask?.destroy();
};

const renderInputStructure = ({
  inputData,
  value,
  onValueChange,
  ref,
  key,
}: Props & { ref: React.RefObject<HTMLInputElement> }) => (
  <div key={key} className="mb-4">
    <label className="block font-bold mb-2" htmlFor={inputData.name}>
      {inputData.label}
    </label>
    <input
      ref={ref}
      type={inputData.type}
      id={inputData.name}
      name={inputData.name}
      placeholder={inputData.placeholder}
      required={inputData.required}
      minLength={inputData.minLength}
      maxLength={inputData.maxLength}
      defaultValue={inputData.defaultValue}
      autoComplete={!inputData.suggestion ? "off" : ""}
      onChange={onValueChange}
      value={value}
      className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline rg"
    />
  </div>
);
