import { Button } from "react-bootstrap";

export const BulkImportInstructions: React.FC = () => {
    return (
        <div className="bulk-import__instructions col-md-4 col-sm-12">
            <h2>For first time use, download the CSV templates</h2>
            <Button variant="outline-primary">Download CSV Templates</Button>
            <h6>All offers in your CSV file require the following fields:</h6>
            <ul>
                <li>Title</li>
                <li>Campaign ID</li>
            </ul>
        </div>
    );
};