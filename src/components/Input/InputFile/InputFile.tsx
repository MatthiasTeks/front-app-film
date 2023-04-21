import React, {FC} from "react";
import {handleFileChange} from "../../../helpers/file";
import './InputFile.css';

interface Props<T> {
    id: string;
    label: string;
    setter: React.Dispatch<React.SetStateAction<T>>;
    accept: string,
    required: boolean,
    multiple?: boolean
}

const InputFile = <T extends File | File[] | null>({id, label, setter, accept, required, multiple}: Props<T>) => {
    return (
        <div className="input-file">
            <label htmlFor={id}>{label}</label>
            <input
                type="file"
                id={id}
                name={id}
                accept={accept}
                required={required}
                onChange={(e) => setter(handleFileChange(e) as T)}
                multiple={multiple}
            />
        </div>
    );
};

export default InputFile;