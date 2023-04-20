import { FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './RequireAuth.css';


interface PropsRequireAuth {
    children: ReactNode;
}

/**
 * RequireAuth component that redirects the user to the login page if they're not authenticated.
 * @param {PropsRequireAuth} props - Component props
 * @returns The children components if the user is authenticated, otherwise nothing.
 */
export const RequireAuth: FC<PropsRequireAuth> = ({ children }) => {
    const [access, setAccess] = useState(false);

    const navigate = useNavigate();

    const protectedRoute = () => {
        const token = localStorage.getItem("token");
        axios({
            method: "POST",
            url: `${import.meta.env.VITE_API_URL}/user/protected`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((result) => {
                setAccess(result.data.access);
            })
            .catch((err) => {
                setAccess(false);
                navigate("/login");
            });
    };

    useEffect(() => {
        protectedRoute();
    }, []);

    return (
        <>
            {access ? (
                children
            ) : null}
        </>
    );
};