import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from 'react-i18next';

import { ToastContainer } from 'react-toastify';
import { bulkUploadToastStart, bulkUploadToastSuccess, bulkUploadToastFailure } from '../../notifications/toast-config';
import 'react-toastify/dist/ReactToastify.css';

import { bulkImportService } from '../../services/bulk-import-service';

export const BulkImportDropzone: React.FC = () => {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles) => {
    bulkUploadToastStart();

    bulkImportService.uploadBulkImportFile(acceptedFiles[0])
      .then(() => {
        bulkUploadToastSuccess();
      })
      .catch(() => {
        bulkUploadToastFailure();
      })
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  return (
    <>
      <ToastContainer />
      <div className="col-md-8 col-sm-12">
          <div {...getRootProps({ className: "bulk-import__dropzone" })}>
            <input {...getInputProps()} />
            <h1>{t('DragDropCSV')}</h1>
            <p>Or select a file from your computer</p>
          </div>
      </div>
    </>
  );
};
