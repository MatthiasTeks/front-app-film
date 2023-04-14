import { FC } from "react";
import Skeleton from "react-loading-skeleton";

import './Skeletons.css';

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