"use client"
import React, { useState, ChangeEvent } from "react";
import {
	FormInputOptions,
	SimpleInputOption,
	GroupInputOption,
	CheckboxInputOption,
	ObjectInputOption,
	types
} from "./types";
import { getConfig } from "./decorator/render/set";
import InputClient from "./client/input";
import SelectClient from "./client/select";
import FileUpload from "./client/file";

export type RecursiveFormInputOptions = {
	[key: string]: RecursiveFormInputOptions | (FormInputOptions & { name: string });
};

interface FormComponentProps {
	formData: RecursiveFormInputOptions;
	name: string
	label: string
}

const FormComponent = ({ formData, name, label }: FormComponentProps) => {
	function isInputOption(field: any): field is (FormInputOptions & { name: string }) {
		return field && field.type && types.some(item => item == field.type)
	}
	const initializeForm = (fields: RecursiveFormInputOptions) => {
		const initialValues: { [key: string]: any } = {};

		const initializeFields = (fields: RecursiveFormInputOptions) => {
			Object.keys(fields).forEach((key) => {
				const field = fields[key];
				const fieldName = field.name;

				if (typeof fieldName == 'string') {
					if (field.type === "text") {
						initialValues[fieldName] = "";
					} else if (field.type === "select") {
						initialValues[fieldName] = field.options[0];
					} else if (field.type === "radio") {
						initialValues[fieldName] = field.options[0];
					} else if (field.type === "checkbox") {
						initialValues[fieldName] = [];
					} else if (field.type === "file") {
						initialValues[fieldName] = null;
					}
				} else if (!isInputOption(field)) {
					initializeFields(field);
				}
			});
		};

		initializeFields(fields);

		return initialValues;
	};

	const [formValues, setFormValues] = useState<any>(initializeForm(formData));
	const [tableData, setTableData] = useState<any[]>([]);

	type InputChangeEventCurrying = (name: string) => (e: ChangeEvent<HTMLInputElement>) => void
	type SelectChangeEventCurrying = (name: string) => (e: ChangeEvent<HTMLSelectElement>) => void

	const handleInputChange: InputChangeEventCurrying = (name) => (e) => {
		const { value } = e.target;
		setFormValues((prevValues: any) => ({ ...prevValues, [name]: value }));
	};

	const handleCheckboxChange: InputChangeEventCurrying = (name) => (e) => {
		const { value, checked } = e.target;
		const selectedOptions = formValues[name] || [];

		let updatedOptions: string[];
		if (checked) {
			updatedOptions = [...selectedOptions, value];
		} else {
			updatedOptions = selectedOptions.filter(
				(option: string) => option !== value
			);
		}

		setFormValues((prevValues: any) => ({
			...prevValues,
			["custom-name"]: updatedOptions
		}));
	};


	const handleSelectChange: SelectChangeEventCurrying = (name) => (e) => {
		const { value } = e.target;
		setFormValues((prevValues: any) => ({
			...prevValues,
			[name]: JSON.parse(value)
		}));
	};

	const handleRadioChange: InputChangeEventCurrying = (name) => (e) => {
		const { value } = e.target;
		setFormValues((prevValues: any) => ({
			...prevValues,
			[name]: JSON.parse(value)
		}));
	};

	const handleFileChange: InputChangeEventCurrying = (name) => (e) => {
		const { files } = e.target;
		setFormValues((prevValues: any) => ({ ...prevValues, [name]: files != null ? files[0] : null }));
	};

	const handleAddData = () => {
		setTableData((prevData: any[]) => [...prevData, formValues]);
		setFormValues(() => initializeForm(formData));
	};

	const handleDeleteData = (index: number) => {
		setTableData((prevData: any[]) => {
			const newData = [...prevData];
			newData.splice(index, 1);
			return newData;
		});
	};

	const handleUpdateData = (index: number) => {
		setFormValues(tableData[index]);
		handleDeleteData(index);
	};

	const renderFormFields = (fields: RecursiveFormInputOptions) => {
		return Object.keys(fields).map((key) => {
			const field = fields[key];
			if (field.type === "text") {
				return (InputClient({ inputData: field, value: formValues[field.name], onValueChange: handleInputChange(field.name), key }));
			} else if (field.type === "checkbox") {
				return (
					<div key={key}>
						<label>{field.label}</label>
						{field.options.map((option) => (
							<div key={option.value}>
								<input
									type="checkbox"
									value={option.value}
									checked={formValues[field.name].includes(option.value)}
									onChange={handleCheckboxChange(field.name)}
								/>
								<span>{option.label}</span>
							</div>
						))}
					</div>
				);
			} else if (field.type === "select") {

				return (
					SelectClient({ inputData: field, selectedValue: formValues[field.name], onValueChange: handleSelectChange(field.name), key })
				);
			} else if (field.type === "file") {
				return (FileUpload({ key, label: field.label, name: field.label, value: formValues[field.name], required: field.required || false, accept: field.accept || '*' }));
			} else if (field.type === "radio") {
				return (
					<div key={key}>
						<label>{field.label}</label>
						{field.options.map((option) => (
							<div key={option.value}>
								<input
									type="radio"
									value={JSON.stringify(option)} // Stringify the option value
									checked={
										JSON.stringify(formValues[field.name]) ===
										JSON.stringify(option)
									}
									onChange={handleRadioChange(field.name)}
								/>
								<span>{option.label}</span>
							</div>
						))}
					</div>
				);
			} else if (field.type === "list") {
				return (FormComponent({ formData: getConfig(field.option, field.instance), name: field.name, label: field.label || "" }))
			} else if (typeof field === "object") {
				// Handle nested objects recursively
				return (
					<div key={key}>
						<h3>{key}</h3>
						{!isInputOption(field) ? renderFormFields(field) : (() => {
							console.error()
							return (<></>)
						})()}
					</div>
				);
			}

			return null;
		});
	};

	return (
		<fieldset className="border rounded p-4 mb-4">
			<legend className="font-bold mb-2">{label}</legend>

			{/* Render form based on the provided object structure */}
			{renderFormFields(formData)}
			<button type="button" className="px-2 pt-[2px] pb-[4px] mb-4 rounded bg-blue-500 font-semibold text-white" onClick={handleAddData}>salvar</button>
			<div>
				{tableData?.length > 0 && (() => {
					const labels = Object.keys(formData).map((sectionKey, index) => {
						return formData[sectionKey].label?.toString() || ""
					})
					return (
						<div className="flex flex-col gap-4">
							{tableData.map((item, index) => {
								return <div key={index} className="p-2 border rounded dark:border-[#777777] flex flex-col gap-3">
									<div >
										{Object.keys(item).map((itemKey, index) => {
											return <div key={index}>{labels[index] !== "" ? `${labels[index]}: ` : ""}{item[itemKey].label != undefined ? item[itemKey].label : item[itemKey]}</div>
										})}
									</div>
									<div className="flex flex-row gap-2">
										<button type="button" className="px-2 pt-[2px] pb-[2px] rounded bg-orange-500 font-semibold text-white" onClick={(e) => {
											handleUpdateData(index)
										}}>editar</button>
										<button type="button" className="px-2 pt-[2px] pb-[2px] rounded bg-red-500 font-semibold text-white" onClick={(e) => {
											handleDeleteData(index)
										}}>excluir</button>
									</div>
								</div>
							})}
						</div>
					)
				})()}
			</div>

			{/* Render table to display form data */}
			{/* <table>
				<thead>
					<tr>
						{Object.keys(formData).map((sectionKey, index) => {
							console.log(formData[sectionKey])
							return formData[sectionKey] && (<th key={index}>{formData[sectionKey].label?.toString() || ""}{JSON.stringify(tableData[index])}</th>)
						})}
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((data: { [key: string]: string | string[] | { value: string, label: string } }, index) => (
						<tr key={index}>
							{Object.keys(data).map(item => <td>{data[item].label || data[item]}</td>)}
							{Object.keys(formData).map((sectionKey) => {
								const section = (!isInputOption(formData[sectionKey]) && typeof formData[sectionKey] !== "undefined" && typeof formData[sectionKey] !== "string") && formData[sectionKey] || undefined;
								if (section) return Object.keys(section).map((fieldKey) => {
									const input = !isInputOption(section) && section[fieldKey] || undefined
									const dataToTable = (input && typeof input.name == "string") && data[input.name] || undefined
									return (<td key={fieldKey}>
										{(() => {
											const value = JSON.parse(JSON.stringify(dataToTable || ""))
											if (value.label) {
												return value.label
											} else if (value) {
												return value
											}
											return null
										})()}
									</td>)
								});
							})}
							<td>
								<button type="button" onClick={(e) => {
									handleUpdateData(index)
								}}>Update</button>
								<button type="button" onClick={(e) => {
									handleDeleteData(index)
								}}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
				
			</table> */}
			<input type="hidden"
				name={name}
				value={JSON.stringify(tableData)} />
			{/* <pre>{tableData.map((item) => JSON.stringify(item, null, 2))}</pre>
			<br />
			<br />
			<br />
			<pre>{JSON.stringify(formValues, null, 2)}</pre> */}
		</fieldset>
	);
};

export default FormComponent;
