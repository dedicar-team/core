import type IMaskInput from 'imask';
import { configType } from './decorator/render/set';

export type Constructor<T> = new () => T;

export type FormInputOptions =
	| SimpleInputOption
	| FileInputOption
	| GroupInputOption
	| CheckboxInputOption
	| ObjectInputOption
	| ListInputOption

export const types = ["text", "textarea", "password", "number", "date", "file", "email", "select", "radio", "checkbox", "object", "list"] as const
export type types = typeof types[number]

export interface SimpleInputOption {
	type: "text" | "textarea" | "password" | "number" | "date" | "email";
	name?: string;
	placeholder?: string;
	suggestion?: true;
	label?: string;
	mask?: Parameters<typeof IMaskInput>['1'];
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	defaultValue?: string;
	errorMessage?: string;
	accept?: string
}

export interface FileInputOption {
	type: "file"
	defaultValue?: string
	label?: string
	name?: string
	required?: boolean
	accept?: fileMime | string
}

const fileMimeTypes = [
	'application/*',
	'application/gzip',
	'application/json',
	'application/msword',
	'application/pdf',
	'application/rtf',
	'application/vnd.ms-excel',
	'application/vnd.ms-powerpoint',
	'application/vnd.oasis.opendocument.presentation',
	'application/vnd.oasis.opendocument.spreadsheet',
	'application/vnd.oasis.opendocument.text',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'application/x-7z-compressed',
	'application/x-rar-compressed',
	'application/zip',
	'audio/*',
	'audio/aac',
	'audio/mpeg',
	'audio/ogg',
	'audio/wav',
	'image/*',
	'image/bmp',
	'image/gif',
	'image/jpeg',
	'image/png',
	'image/svg+xml',
	'image/tiff',
	'text/*',
	'text/csv',
	'text/html',
	'text/markdown',
	'text/plain',
	'video/*',
	'video/mp4',
	'video/mpeg',
	'video/quicktime',
	'video/x-matroska',
	'video/x-msvideo',
] as const;

type fileMime = typeof fileMimeTypes[number]

export interface GroupInputOption {
	type: "select" | "radio";
	name?: string;
	label?: string;
	defaultValue?: any;
	errorMessage?: string;
	options: {
		value: any;
		label: string;
	}[];
}

export interface CheckboxInputOption {
	type: "checkbox";
	name?: string;
	label?: string;
	defaultValue?: string[];
	errorMessage?: string;
	options: {
		value: any;
		label: string;
	}[];
}

export class FormDecorator {
	'__form_input_decorator_jsx__': Record<string, any>
	'__form_input_decorator_jsx_pathed__': Record<string, any>
	'__form_input_decorator_jsx_translated__': Record<string, any>
	'__form_input_decorator_jsx_pathed_translated__': Record<string, any>
	'__form_input_decorator_label_translation__': Record<string, any>
	'__form_input_decorator_path__': Record<string, any>
	render!: (config: 'default' | 'pathed' | 'default-translated' | 'pathed-translated') => JSX.Element;
}

export interface ObjectInputOption {
	type: "object";
	name?: string;
	label?: string;
	instance: new (...params: any[]) => FormDecorator;
}

export interface ListInputOption {
	type: "list";
	name: string;
	label?: string;
	instance: FormDecorator;
	option: configType
}
