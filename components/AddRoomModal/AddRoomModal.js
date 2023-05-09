import { useState } from "react";
import styled from "styled-components";
import { RoomType } from "../RoomTile/RoomTile";

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
  position: fixed;
`;

const Overlay = styled.div`
  background: rgba(49, 49, 49, 0.5);
  width: 100vw;
  height: 100vh;
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
  font-size: 20px;
`;

const NameInput = styled.input`
  margin: 10px;
`;

const RoomMenu = styled.select`
  margin: 10px;
`;

const AddButton = styled.button`
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
`;

// Modal Component
export default function AddRoomModal({ rooms, addRoom }) {
  const [modalOpen, setModalOpen] = useState(false);

  // Toggle modal state from true to false
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Add room function
  const handleAddRoom = (event) => {
    event.preventDefault();
    addRoom({
      title: event.target.name.value,
      type: event.target.room.value,
    });
    toggleModal();
  };

  return (
    <>
      <OpenBtn onClick={toggleModal}>Add Room</OpenBtn>
      {/* If modal true, then return modal html, else return nothing*/}
      {modalOpen && (
        <Modal>
          <Overlay onClick={toggleModal}></Overlay>
          <ModalContent>
            <form onSubmit={handleAddRoom}>
              <Headline>Add Room</Headline>
              <Label htmlFor="name">Name</Label>
              <NameInput type="text" id="name" name="name" required></NameInput>
              <Label htmlFor="room">Choose Room</Label>
              <RoomMenu id="room" name="room">
                <option disabled selected>
                  Select room type
                </option>
                <option value={RoomType.KITCHEN}>Kitchen</option>
                <option value={RoomType.BEDROOM}>Bedroom</option>
                <option value={RoomType.LIVING_ROOM}>Living Room</option>
                <option value={RoomType.HALLWAY}>Hallway</option>
                <option value={RoomType.DINING_ROOM}>Dining Room</option>
                <option value={RoomType.OFFICE}>Office</option>
                <option value={RoomType.BATHROOM}>Bathroom</option>
              </RoomMenu>
              <AddButton type="submit">Add!</AddButton>
            </form>
            <CloseModalBtn onClick={toggleModal}>✕</CloseModalBtn>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
