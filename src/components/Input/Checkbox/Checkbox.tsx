import { FC, ChangeEvent } from 'react';
import './Checkbox.css';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <label className="checkbox-container">
            {label}
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="checkmark"/>
        </label>
    );
};
