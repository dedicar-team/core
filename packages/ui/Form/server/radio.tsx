import { GroupInputOption } from '../types';
export default function RadioServer({ inputData }: { inputData: GroupInputOption }) {
    return (
        <fieldset className="border rounded p-4 mb-4">
            <legend className="font-bold mb-2">{inputData.label}</legend>
            <div className="flex">
                {RadioMap({ inputData })}
            </div>
        </fieldset>
    );
}

const RadioMap = ({ inputData }: { inputData: GroupInputOption }) => (<>{
    inputData.options.map((option, index) => (
        <div key={index} className="inline-flex items-center mr-4">
            {JSON.stringify({value:option.value, default:inputData.defaultValue})}
            <input
                type="radio"
                id={`${inputData.name}[${index}]`}
                name={inputData.name}
                value={option.value}
                defaultChecked={option.value == inputData.defaultValue}
            />
            <label htmlFor={`${inputData.name}[${index}]`} className="ml-2">{option.label}</label>
        </div>
    ))
}</>)