import styled from "styled-components";
import { useRouter } from "next/router";
import { RiDeleteBin6Fill } from "react-icons/ri";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function DeleteButton({ room }) {
  const router = useRouter();
  const { id } = router.query;

  async function handleDelete() {
    const response = await fetch(`/api/rooms/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Are you sure you want to delete this room?");
      router.push("/");
    }
  }

  return (
    <StyledButton onClick={handleDelete}>
      <RiDeleteBin6Fill size="20px" />
    </StyledButton>
  );
}
