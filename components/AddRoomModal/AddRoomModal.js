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

  const Modal = styled.div;

  const Overlay = styled.div;

  const ModalContent = styled.div;

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
