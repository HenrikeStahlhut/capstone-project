import { useState } from "react";
import styled from "styled-components";

// Modal Component
export default function AddRoomModal() {
  const [modal, setModal] = useState(false);

  // Toggle modal state from true to false
  const toggleModal = () => {
    setModal(!modal);
  };

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
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49, 49, 49, 0.8);
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

  const Headline = styled.h2;

  const NameInput = styled.input; //How to styled.input?

  const RoomOptions = styled.select; //How to styled.select?

  return (
    <>
      {/* If modal true, then return modal html, else return nothing*/}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
