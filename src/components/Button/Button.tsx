import { FC } from 'react';
import './Button.css';

interface Props {
    text: string;
    name?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    isWhite?: boolean;
    isBlack?: boolean;
    size?: string;
    className?: string;
}

const Button: FC<Props> = ({text, name, type, onClick, isWhite, isBlack, size, className}) => {
    return (
        <button
            className={`
                button flex row justifyCenter center
                ${isWhite ? 'button-white' : isBlack ? 'button-black' : ''}
                ${size}
                ${className}
            `}
            name={name}
            type={type}
            onClick={onClick}
        >
            <p className="is5">{text}</p>
        </button>
    );
};

export default Button;
