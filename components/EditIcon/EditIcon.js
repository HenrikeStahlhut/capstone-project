import { HiPencilAlt } from "react-icons/hi";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  color: transparent;
`;

export default function EditIcon() {
  return (
    <StyledButton>
      <HiPencilAlt size="30px" />
    </StyledButton>
  );
}
