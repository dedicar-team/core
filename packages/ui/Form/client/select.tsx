import React, { ChangeEvent } from 'react';
import { GroupInputOption } from '../types';

interface Props {
    key: string
    inputData: GroupInputOption;
    selectedValue: string;
    onValueChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectClient({ inputData, selectedValue, onValueChange, key }: Props) {
    return (
        <div key={key} className="mb-4">
            <label className="block font-bold mb-2" htmlFor={inputData.name}>
                {inputData.label}
            </label>
            <select
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id={inputData.name}
                value={JSON.stringify(selectedValue)}
                onChange={onValueChange}
            >
                {SelectMap({ inputData })}
            </select>
        </div>
    );
}

const SelectMap = ({ inputData }: { inputData: Props['inputData'] }) => (<>
    {inputData.options.map((option, index) => (
        <option key={index} value={JSON.stringify(option)}>
            {option.label}
        </option>
    ))}
</>)