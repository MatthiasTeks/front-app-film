import { useState, useEffect } from "react";
import {useDataWithLoading} from "../api/common";

type FetchMoreProps = {
    url: string;
    pageSize: number;
};

type FetchMoreReturn<T> = {
    data: T[];
    isLoading: boolean;
    isError: boolean;
    hasMore: boolean;
};

export const useFetchMore = <T>({url, pageSize}: FetchMoreProps): FetchMoreReturn<T> => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const { data: fetchedData, isLoading: isFetching, isError: fetchError } = useDataWithLoading(`${url}?page=${page}&size=${pageSize}`);

    useEffect(() => {
        if (!fetchedData) return;
        setData((prevData) => [...prevData, ...fetchedData]);
        setIsLoading(false);
        setHasMore(fetchedData.length === pageSize);
        setIsError(fetchError);
    }, [fetchedData, fetchError]);

    function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight &&
            hasMore
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return { data, isLoading, isError, hasMore };
}