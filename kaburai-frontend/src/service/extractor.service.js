import {api} from "../lib/axios.js";

const extract = async ({file, language = "English"}) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("language", language);

    return api.post("/extractor/extract", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

const health = async () => {
  return api.get('/extractor/health')
}

export const extractorService = {
    extract,
    health
}