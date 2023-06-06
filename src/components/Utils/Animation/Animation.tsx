import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import './Animation.css';

interface PropsAnimation {
    y: number;
    yEnd: number;
    x: number;
    xEnd: number;
    delay: number;
    ease: string;
    duration: number;
    children?: ReactNode;
    whileHover?: object;
}

/**
 * Animation component that uses framer-motion to animate a component in when it's in view.
 * @param {PropsAnimation} props - Component props
 * @returns The animated component.
 */
export const Animation: FC<PropsAnimation> = ({ y, yEnd, x, xEnd, delay, ease, duration, children, whileHover }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y, x }}
            animate={{ opacity: 1, y: yEnd, x: xEnd }}
            transition={{ ease: ease, duration: duration, delay }}
            whileHover={whileHover}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};