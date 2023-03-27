import React, { useState, createContext, FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IAuthContext {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Props {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthContextProvider: FC<Props> = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    /**
     * Function to handle user authentication.
     * @function
     * @async
     * @returns {Promise<void>}
     */
    const handleConnexion = async (): Promise<void> => {
        const token = localStorage.getItem("token");
        try {
            const result = await axios({
                method: "POST",
                url: `${import.meta.env.VITE_API_URL}/auth/protected`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate("/panel-admin");
        } catch (err) {
            navigate("/admin");
        }
    };

    /**
     * Function to handle form submission.
     * @function
     * @param {React.FormEvent<HTMLFormElement>} e - The form event object.
     * @returns {void}
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        axios
            .post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                localStorage.setItem("token", res.headers["x-access-token"]);
            })
            .then(handleConnexion);
    };

    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                handleSubmit,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;