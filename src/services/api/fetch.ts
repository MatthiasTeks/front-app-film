import { useQuery } from 'react-query';
import axios from "axios";

async function fetcher(url: string): Promise<any> {
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new Error(`Error: ${resp.statusText}`);
    }
    return resp.json();
}

export function useDataWithLoading(url: string): {
    data: any,
    error: Error | null,
    isLoading: boolean,
    isError: boolean
} {
    const queryUrl = `${import.meta.env.VITE_API_URL}/${url}`;

    const { data, error, isLoading, isError } = useQuery(
        ['data', queryUrl],
        () => fetcher(queryUrl)
    );

    return {
        data,
        error: error ? error as Error : null,
        isLoading,
        isError,
    };
}

export async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await axios.get<T>(`${import.meta.env.VITE_API_URL}/${url}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

