import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export interface IGenericModalProps {
    title: string;
    ModalBody: React.FC;
    cancelText: string;
    submitText: string;
    closeCallback: () => void;
    submitCallback: () => void;
}

export const GenericModal: React.FC<IGenericModalProps> = ({ title, ModalBody, cancelText, submitText, closeCallback, submitCallback }) => {
    const handleClose = () => { closeCallback(); }
    const handleSubmit = () => { submitCallback(); }

    return (
        <>
            <Modal centered show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><ModalBody /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>{cancelText}</Button>
                    <Button variant="primary" onClick={handleSubmit}>{submitText}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}