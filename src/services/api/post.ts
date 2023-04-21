export async function postRequest<T>(url: string, body: T): Promise<Response> {
    return await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}