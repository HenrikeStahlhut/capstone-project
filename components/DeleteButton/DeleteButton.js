import styled from "styled-components";
import { RiDeleteBin6Fill } from "react-icons/ri";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export default function DeleteButton() {
  return (
    <StyledButton>
      <RiDeleteBin6Fill size="20px" />
    </StyledButton>
  );
}
