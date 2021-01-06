import axios from 'axios';

import { BASE_CCC_API_URL } from './service-constants';

const uploadBulkImportFile = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append('offersBulkImportFile', file);

        let res = await axios.post(`${BASE_CCC_API_URL}/bulkimport/offers`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
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