import React, { FC, useState } from 'react';
import './InputComponent.css';

interface InputProps {
    label: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
    onFileChange?: (file: File) => void;
    required?: boolean,
    autoComplete?: string;
}

export const InputComponent: FC<InputProps> = ({
    label,
    placeholder = '',
    type = 'text',
    value,
    onChange,
    onFileChange,
    required,
    autoComplete
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(type === 'file') {
            const file = event.target.files?.[0];
            if (file && onFileChange) {
                onFileChange(file);
            }
        } else if(onChange) {
            onChange(event.target.value);
        }
    };


    return (
        <div className={`input-container ${isFocused ? 'focused' : ''}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required={required}
                autoComplete={autoComplete}
            />
        </div>
    )
}