import React from "react"
import { Button, Modal } from "react-bootstrap"



const CustomModal = ({ handleClose, isActive = false, children, title = `` }) => {

    return <Modal size="lg" className=" fade" id="aAddDietMenus" show={isActive}>
        <div className="modal-content">
            <Modal.Header className="modal-header">
                <Modal.Title className="modal-title">{title}</Modal.Title>
                <Button
                    variant=""
                    className="close"
                    data-dismiss="modal"
                    onClick={handleClose}
                >
                    <span>×</span>
                </Button>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {children}
            </Modal.Body>
        </div>
    </Modal>
}

export default CustomModal