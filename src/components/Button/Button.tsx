import { FC } from 'react';
import './Button.css';

interface Props {
    text: string;
    name?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    category: 'primary-btn' | 'secondary-btn' | 'tertiary-btn';
    disabled?: boolean
}

const Button: FC<Props> = ({ text, type, onClick, category, disabled}) => {
    return (
        <button
            className={`button flex row justifyCenter center ${category} ${disabled ? "disabled-btn" : ''}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            <p className="is5">{text}</p>
        </button>
    );
};

export default Button;
