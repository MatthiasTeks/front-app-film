import React, { useState, createContext, FC, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AlertContext } from "./AlertContext";

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

export const AuthContextProvider: FC<Props> = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { addAlert } = useContext(AlertContext);

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
            await axios({
                method: "POST",
                url: `${import.meta.env.VITE_API_URL}/user/protected`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate("/panel/dashboard");
        } catch (err) {
            navigate("/panel");
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
            .post(`${import.meta.env.VITE_API_URL}/user/login`, {
                mail: email,
                password: password,
            })
            .then((res) => {
                localStorage.setItem("token", res.headers["x-access-token"]);
                addAlert({ message: "Connexion réussie", type: "success" });
            })
            .then(handleConnexion)
            .catch(() => {
                console.log('error');
                addAlert({ message: "Identifiants incorrects", type: "error" });
            });
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
