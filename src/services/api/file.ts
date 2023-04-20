import axios from "axios";
import {FormEvent} from "react";

export const uploadFileToUrl = async (e: FormEvent<HTMLFormElement>, file: File, url: string) => {
    e.preventDefault();
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