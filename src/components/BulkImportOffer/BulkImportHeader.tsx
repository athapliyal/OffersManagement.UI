import { useTranslation } from 'react-i18next';

export const BulkImportHeader: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bulk-import__header col-md-12">
            <h1><i className="fas fa-upload"></i> {t('OfferImport')}</h1>            
        </div>
    );
};