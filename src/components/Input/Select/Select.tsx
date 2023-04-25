import React, {FC, useEffect, useState} from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import "./Select.css";

interface Option {
    value: string;
    label: string;
}

interface Props {
    options: Option[];
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
}

export const Select: FC<Props> = ({ options, defaultValue, onChange, label }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        if(!isFocused){
            setIsClicked(false);
        }
    }, [isFocused])

    return (
        <div className={`select-wrapper ${isFocused ? 'focused' : ''}`}>
            <label htmlFor={label}>{label}</label>
            <select
                id={label}
                defaultValue={defaultValue}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={handleClick}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {isClicked ? <RxCross2 /> : <MdKeyboardArrowDown /> }
        </div>
    );
};