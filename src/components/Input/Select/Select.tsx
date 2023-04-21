import React, { FC } from "react";
import "./Select.css";

interface Option {
    value: string;
    label: string;
}

interface Props {
    options: Option[];
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<Props> = ({ options, defaultValue, onChange }) => {
    return (
        <div className="select-wrapper">
            <select defaultValue={defaultValue} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};