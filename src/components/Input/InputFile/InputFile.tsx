import React, {FC, useState} from "react";
import {handleFileChange} from "../../../helpers/file";
import { FiUploadCloud } from 'react-icons/fi';
import { TiInputChecked } from 'react-icons/ti';
import './InputFile.css';

interface Props<T> {
    id: string;
    label: string;
    setter: React.Dispatch<React.SetStateAction<T>>;
    accept: string,
    required: boolean,
    multiple?: boolean
}

export const InputFile = <T extends File | File[] | null>({id, label, setter, accept, required, multiple}: Props<T>) => {
    const [fileSelected, setFileSelected] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const isSelected = files && files.length > 0;
        setFileSelected(!!isSelected);
        if (isSelected) {
            setter(handleFileChange(e) as T);
        }
    };

    return (
        <div className={`input-file-holder${fileSelected ? " file-selected" : ""}`}>
            <label htmlFor={id} className="input-file-label">
                {label}
                <span className="icon-text-wrapper">
                    {fileSelected ? <TiInputChecked className="upload-icon" /> : <FiUploadCloud className="upload-icon" />}
                    <span className="upload-text">Upload</span>
                </span>
                <input
                    id={id}
                    accept={accept}
                    name={id}
                    required={required}
                    onChange={handleInputChange}
                    multiple={multiple}
                    type="file"
                    className="input-file"
                />
            </label>
        </div>
    );
};
