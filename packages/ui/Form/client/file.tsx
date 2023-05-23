"use client"
import { useState, ChangeEvent, useEffect } from 'react';

interface Props {
    name?: string;
    label?: string
    value: string
    required: boolean
    key: string
    accept: string
}

function FileUpload({ name, label, value, key, required, accept }: Props) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [base64File, setBase64File] = useState<string>('');

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file || null);
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file as File);
            reader.onload = () => {
                setBase64File(reader.result as string);
            };
        }
        if (!file) {
            setSelectedFile(null)
            setBase64File('')
        }
    };

    useEffect(() => {
        value = base64File
    }, [base64File])

    return (
        <div key={key} className="mb-4">
            <label className="block font-bold mb-2" htmlFor={label || name}>{label || name}</label>
            <input
                className="border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                id={label || name}
                type="file"
                accept={accept}
                onChange={handleFileInputChange}
                multiple={false}
                required={required}
            />
            {base64File ? <img src={base64File} className='my-2 rounded w-[200px]' /> : null}
            <input type="hidden" name={name} value={base64File} />
        </div>
    );
}

export default FileUpload;