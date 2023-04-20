import React, {FormEvent} from "react";
import axios from "axios";

export const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
        return event.target.files[0];
    } else {
        return null;
    }
};