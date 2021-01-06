import { BulkImportHeader } from './BulkImportHeader';
import { BulkImportDropzone } from './BulkImportDropzone';
import { BulkImportInstructions } from './BulkImportInstructions';

import "./bulk-import-offer.scss";

export const BulkImportOffer: React.FC = () => {
  return (
    <section className="bulk-import__wrapper">
      <div className="container">
        <div className="row">
          <BulkImportHeader />
          <section className="bulk-import__body container">
            <div className="row">
              <BulkImportDropzone />
              <BulkImportInstructions />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
