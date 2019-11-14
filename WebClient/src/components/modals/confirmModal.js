import React from 'react';
import {
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from "reactstrap";
export class ConfirmModal extends React.Component {
  render() {
    const {
      isOpenModal, className, toggleModal,
      headerTitle, bodyContent, sizeModal,
      textBtnYes, textBtnNo, backdropModal,
      selectedYes
    } = this.props;
    return (
      <Modal isOpen={isOpenModal} size={sizeModal} backdrop={backdropModal}
        className={'modal-' + className} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{headerTitle}</ModalHeader>
        <ModalBody>{bodyContent}</ModalBody>
        <ModalFooter>
          <Button className="label-button-confirm" color={className} onClick={selectedYes}>{textBtnYes}</Button>{' '}
          <Button className="label-button-confirm" color="secondary" onClick={toggleModal}>{textBtnNo}</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ConfirmModal;
