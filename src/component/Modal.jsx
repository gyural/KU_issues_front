import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

const ModalButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #0D6EFD;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = ({ onClose, onSave, onChange, newPassword, confirmNewPassword }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>비밀번호 수정</h2>
        <input
          type="password"
          name="newPassword"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          name="confirmNewPassword"
          placeholder="비밀번호 확인"
          value={confirmNewPassword}
          onChange={onChange}
        />
        <br />
        <ModalButton onClick={onSave}>저장</ModalButton>
        <ModalButton onClick={onClose}>취소</ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
