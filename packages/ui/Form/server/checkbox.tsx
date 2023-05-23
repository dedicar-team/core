import * as React from 'react';
import { CheckboxInputOption } from '../types';
export default function CheckboxServer({ inputData }: { inputData: CheckboxInputOption }) {
    return (
        <fieldset className="border rounded p-4 mb-4">
            <legend className="font-bold mb-2">{inputData.label}</legend>
            <div className="flex flex-wrap gap-x-2">
                {CheckboxMap({ inputData })}
            </div>
        </fieldset>
    );
};

const CheckboxMap = ({ inputData }: { inputData: CheckboxInputOption }) => (<>{inputData.options.map((option, index) => (
    <div key={index} className="inline-flex items-center mb-2">
        <input
            type="checkbox"
            name={inputData.name}
            value={option.value}
            defaultChecked={inputData.defaultValue?.includes(option.value)}
        />
        <label key={option.value} className="ml-2">
            {option.label}
        </label>
    </div>
))}</>)