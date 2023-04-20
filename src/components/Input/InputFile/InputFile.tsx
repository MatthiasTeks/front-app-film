import React, {FC} from "react";
import {handleFileChange} from "../../../services/admin/common";
import './InputFile.css';

interface Props {
    label: string;
    setter: React.Dispatch<React.SetStateAction<File | null>>;
    accept: string,
    required: boolean
}

const InputFile: FC<Props> = ({label, setter, accept, required}) => {
    return (
        <div className="input-file">
            <label htmlFor="file">{label}</label>
            <input
                type="file"
                id="file"
                name="file"
                accept={accept}
                required={required}
                onChange={(e) => setter(handleFileChange(e))}
            />
        </div>
    );
};

export default InputFile;