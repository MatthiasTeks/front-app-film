import { useEffect, useState, ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion';
import axios from "axios";

/**
 * ScrollTop component that scrolls to the top of the page when the route changes.
 * @returns null
 */
export const ScrollTop = (): null => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

interface PropsAnimation {
    y: number;
    yEnd: number;
    x: number;
    xEnd: number;
    delay: number;
    children?: ReactNode;
}

/**
 * Animation component that uses framer-motion to animate a component in when it's in view.
 * @param {PropsAnimation} props - Component props
 * @returns The animated component.
 */
export const Animation: FC<PropsAnimation> = ({ y, yEnd, x, xEnd, delay, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y, x }}
            whileInView={{ opacity: 1, y: yEnd, x: xEnd }}
            transition={{ ease: "linear", duration: 1, delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

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
            url: `${import.meta.env.VITE_API_URL}/auth/protected`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((result) => {
                setAccess(result.data.access);
            })
            .catch((err) => {
                setAccess(false);
                navigate("/admin");
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

interface PropsSkeletons {
    col: number;
    row: number;
}

/**
 * Skeletons component that displays multiple instances of a Skeleton component.
 * @param {PropsSkeletons} props - Component props
 * @returns The Skeletons component.
 */
export const Skeletons: FC<PropsSkeletons> = ({ col, row }) => {
    return (
        <div className="skeleton-mv flex column justifyCenter center">
            {Array(col).fill(null).map((item, i) => (
                <div className="skeleton-row" key={`skelcol${i}`}>
                    {Array(row).fill(null).map((item, i) => (<Skeleton key={`skelrow${i}`}/>))}
                </div>
            ))}
        </div>
    )
}