import React, { ChangeEvent } from 'react';
import { CheckboxInputOption } from '../types';

interface Props {
    inputData: CheckboxInputOption;
    checkedValues: string[];
    onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxClient({ inputData, checkedValues, onCheckboxChange }: Props) {
    return (
        <fieldset className="border rounded p-4 mb-4">
            <legend className="font-bold mb-2">{inputData.label}</legend>
            <div className="flex flex-wrap gap-x-2">
                {CheckboxMap({ inputData, checkedValues, onCheckboxChange })}
            </div>
        </fieldset>
    );
}

const CheckboxMap = ({ inputData, checkedValues, onCheckboxChange }: Props) => (<>{inputData.options.map((option, index) => (
    <div key={index} className="inline-flex items-center mb-2">
        <input
            type="checkbox"
            value={option.value}
            checked={checkedValues.includes(option.value)}
            onChange={onCheckboxChange}
        />
        <label key={option.value} className="ml-2">
            {option.label}
        </label>
    </div>
))}</>)