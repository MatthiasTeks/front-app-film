import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import './Animation.css';

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