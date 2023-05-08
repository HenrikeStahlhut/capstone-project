import { useState } from "react";
import styled from "styled-components";

// Styled Components
const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;
const CloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;
const Headline = styled.h2`
  color: red;
`;
const NameInput = styled.input; //How to styled.input?
const RoomOptions = styled.select; //How to styled.select?

// Modal Component
export default function AddRoomModal() {
  const [modalOpen, setModalOpen] = useState(false);

  // Toggle modal state from true to false
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal in Component</button>

      {/* If modal true, then return modal html, else return nothing*/}
      {modalOpen && (
        <Modal>
          <Overlay onClick={toggleModal}></Overlay>
          <ModalContent>
            <Headline>Hello Modal</Headline>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <CloseModalBtn onClick={toggleModal}>CLOSE</CloseModalBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
