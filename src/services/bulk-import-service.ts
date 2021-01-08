import axios from './axios';

const uploadBulkImportFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('offersBulkImportFile', file);

        let res = await axios.post(`/bulkimport/offers`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true
        });

        return res;
    }
    catch (err) {
        throw new Error("Unable to upload the bulk import file");
    }
}

export const bulkImportService = {
    uploadBulkImportFile
}