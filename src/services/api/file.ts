import axios from "axios";

export const uploadFileToUrl = async (file: File, url: string) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        return await axios.post(`${import.meta.env.VITE_API_URL}/${url}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error: any) {
        throw error;
    }
}

export const uploadArrayFileToUrl = async (files: File[], url: string) => {
    const formData = new FormData();

    files.forEach((file) => {
        formData.append('files', file);
    });

    try {
        return await axios.post(`${import.meta.env.VITE_API_URL}/${url}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    } catch (error) {
        console.error('Erreur lors de la requête :', error);
    }
}