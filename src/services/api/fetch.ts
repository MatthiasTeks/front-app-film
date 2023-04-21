import { useQuery } from 'react-query';

/**
 * Fetcher function to handle HTTP request logic.
 * @async
 * @param {string} url - The URL to fetch data from.
 * @throws {Error} Will throw an error if the response is not ok.
 * @returns {Promise<Object>} A promise that resolves to the JSON data.
 */
async function fetcher(url: string): Promise<any> {
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new Error(`Error: ${resp.statusText}`);
    }
    return resp.json();
}

/**
 * Custom hook to fetch data using React Query.
 * @function
 * @param {string} url - The URL endpoint to fetch data from.
 * @returns {{
 *   data: Object,
 *   error: Error | null,
 *   isLoading: boolean,
 *   isError: boolean
 * }} An object containing the data, error, isLoading, and isError states.
 */
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

export function getSignedProjectMediaUrl(key: string): {
    data: any,
    error: Error | null,
    isLoading: boolean,
    isError: boolean
} {
    if(key !== undefined){
        const queryUrl = `${import.meta.env.VITE_API_URL}/project/${key}/sign-url`;

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

    return {
        data: undefined,
        error: null,
        isLoading: false,
        isError: false,
    };
}


