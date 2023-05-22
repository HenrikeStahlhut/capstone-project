import styled from "styled-components";
import { useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledOpenBtn,
  StyledOverlay,
} from "../AddRoomModal/AddRoomModal.Styled";
import {
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "../AddPlantForm/AddPlantForm.Styled";
import { RoomType } from "../RoomTile/RoomTile";
import { useSWRConfig } from "swr";
import useSWR from "swr";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

async function sendRequest(url, { arg }) {
  // here we set the request method
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error(`Error: ${response.status}`);
  }
}

export default function EditRoomModal({ room }) {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/rooms/${id}`);
  const { trigger } = useSWRMutation(`/api/rooms/${id}`, sendRequest);

  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState(room.title);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const roomData = Object.fromEntries(formData);

    await trigger(roomData);

    toggleModal();
  }

  return (
    <>
      <StyledButton>
        <HiPencilAlt size="20px" onClick={toggleModal} />
      </StyledButton>
      {modalOpen && (
        <StyledModal>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModalContent>
            <StyledModalHeadline>Edit Room</StyledModalHeadline>
            <form onSubmit={handleEdit}>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="title"
                required
                value={title}
                onChange={handleTitleChange}
              />

              <StyledAddButton type="submit">Save edits</StyledAddButton>
            </form>

            <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
