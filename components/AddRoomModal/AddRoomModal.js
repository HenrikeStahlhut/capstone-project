import { useState } from "react";
import styled from "styled-components";

// Styled Components

const OpenBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  padding: 5px 7px;
  border: none;
  background-color: lightgrey;
`;

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
  background: rgba(49, 49, 49, 0.5);
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
  color: black;
`;
const NameInput = styled.input`
  margin: 10px;
`;

const RoomMenu = styled.select`
  margin: 10px;
`;

const AddButton = styled.button`
  position: realtive;
`;

const Label = styled.label`
  font-size: 14px;
`;

// Modal Component
export default function AddRoomModal({ rooms }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Toggle modal state from true to false
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const addRoom = () => {};

  return (
    <>
      <OpenBtn onClick={toggleModal}>Add Room</OpenBtn>

      {/* If modal true, then return modal html, else return nothing*/}
      {modalOpen && (
        <Modal>
          <Overlay onClick={toggleModal}></Overlay>
          <ModalContent>
            <Headline>Add Room</Headline>
            <Label htmlFor="name">Name</Label>
            <NameInput type="text" id="name"></NameInput>
            <Label htmlFor="room">Choose Room</Label>
            <RoomMenu id="room">
              <option disabled selected>
                Select room type
              </option>
              <option>Kitchen</option>
              <option>Bedroom</option>
              <option>Living Room</option>
              <option>Hallway</option>
              <option>Dining Room</option>
              <option>Office</option>
              <option>Bathroom</option>
            </RoomMenu>
            <AddButton onClick={toggleModal}>Add!</AddButton>
            <CloseModalBtn onClick={toggleModal}>✕</CloseModalBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
