import React, { useState } from "react";
import {
  ModalContainer,
  ModalContent,
  ButtonConfirm,
  ButtonDelete,
  ModalButtonContainer,
  ModalButtonText,
  ModalText,
  Modal,
} from "./styles";

function ModalDelete({ visible, id, onDelete, cancel }) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={cancel}
    >
      <ModalContainer>
        <ModalContent>
          <ModalText>Tem certeza de que deseja excluir?</ModalText>
          <ModalButtonContainer>
            <ButtonConfirm onPress={() => cancel(false)}>
              <ModalButtonText>Cancelar</ModalButtonText>
            </ButtonConfirm>
            <ButtonDelete onPress={() => onDelete(id)}>
              <ModalButtonText>Confirmar</ModalButtonText>
            </ButtonDelete>
          </ModalButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default ModalDelete;
