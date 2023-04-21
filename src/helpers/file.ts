import React from "react";

export const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
        if (event.target.multiple) {
            return Array.from(event.target.files);
        } else {
            return event.target.files[0];
        }
    } else {
        return null;
    }
};

export const verifyTypeFiles = (files: File[], type: string) => {
    let isTrue = true;
    if(files){
        files.map((file) => {
            if(file.type !== type){
                isTrue = false;
            }
        })
    } else {
        isTrue = false;
    }
    return isTrue;
}
