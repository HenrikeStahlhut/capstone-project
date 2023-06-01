import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import { HiPencilAlt } from "react-icons/hi";
import { useState } from "react";
import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledOverlay,
  StyledLabel,
} from "../EditRoomModal/EditRoomModal.Styled";
import { StyledInput } from "../AddPlantForm/AddPlantForm.Styled";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
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

export default function EditPlantModal({ plant }) {
  const router = useRouter();
  const { id } = router.query;
  const { trigger } = useSWRMutation(`/api/plants/${id}`, sendRequest);

  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState(plant.title);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  async function handleEdit(event) {
    event.preventDefault();

    await trigger({ title });

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
            <StyledModalHeadline>Edit Plant</StyledModalHeadline>

            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="title"
              required
              value={title}
              onChange={handleTitleChange}
            />

            <StyledAddButton type="submit" onClick={handleEdit}>
              Save edits
            </StyledAddButton>

            <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
