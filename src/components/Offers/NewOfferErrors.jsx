import React from 'react';
import Alert from 'react-bootstrap/Alert'

export const NewOfferErrors = ({ errors }) => {
    return (
        <div className="new-offer-errors-wrapper">
            <strong><p>These validation errors are coming from the server!</p></strong>
            <Alert variant="danger">
                {
                    Object.entries(errors).map(error => {
                        return error[1].map(error => {
                            return <p key={error}>{error}</p>
                        }) 
                    })
                }
            </Alert>
        </div>
    )
}