import * as React from 'react';
import { GroupInputOption } from '../types';
export default function SelectServer({ inputData }: { inputData: GroupInputOption }) {
    return (
        <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor={inputData.name}>{inputData.label}</label>
            <select
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                name={inputData.name}
                id={inputData.name}
                defaultValue={inputData.defaultValue}
            // errorMessage={inputData.errorMessage}
            >
                {SelectMap({ inputData })}
            </select>
        </div>
    );
}

const SelectMap = ({ inputData }: { inputData: GroupInputOption }) => (<>{
    inputData.options.map((option, index) => (
        <option key={index} value={option.value}>
            {option.label}
        </option>
    ))
}</>)