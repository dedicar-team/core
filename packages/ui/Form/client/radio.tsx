import React from 'react';
import { GroupInputOption } from '../types';

interface Props {
    inputData: GroupInputOption;
    selectedValue: string;
    onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioClient({ inputData, selectedValue, onOptionChange }: Props) {
    return (
        <fieldset className="border rounded p-4 mb-4">
            <legend className="font-bold mb-2">{inputData.label}</legend>
            <div className="flex">
                {RadioMap({ inputData, selectedValue, onOptionChange })}
            </div>
        </fieldset>
    );
}

const RadioMap = ({ inputData, selectedValue, onOptionChange }: Props) => (<>
    {inputData.options.map((option, index) => (
        <div key={index} className="inline-flex items-center mr-4">
            <input
                type="radio"
                value={option.value}
                checked={option.value === selectedValue}
                onChange={onOptionChange}
            />
            <label className="ml-2">{option.label}</label>
        </div>
    ))}
</>)