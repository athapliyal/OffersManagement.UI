import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, act } from "@testing-library/react";
import { I18nextProvider } from 'react-i18next';
import i18n from '../translations/i18n';
import { BulkImportOffer } from "../components/BulkImportOffer";

const renderWithRouter = (ui, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);

    return render(ui, { wrapper: MemoryRouter });
};

const BulkImporterWithTranslations = () => (
    <I18nextProvider i18n={i18n}>
        <BulkImportOffer />
    </I18nextProvider>
)

describe("Bulk import offer", () => {
    test("should render on load", () => {
        // Arrange
        renderWithRouter(<BulkImporterWithTranslations />);

        // Act
        const heading = screen.getByText("Offer Import");

        // Assert
        expect(heading).toBeInTheDocument();
    });

    test('should render with translated content when language is changed', async () => {
        // Arrange
        renderWithRouter(<BulkImporterWithTranslations />);

        // Act

        // As this forces a state change, it needs to be wrapped with an act
        act(() => {
            i18n.changeLanguage('jp');
        });
    
        const heading = await screen.findByText(i18n.getDataByLanguage('jp').translation.OfferImport);

        // Assert
        expect(heading).toBeInTheDocument();     
    });
});
