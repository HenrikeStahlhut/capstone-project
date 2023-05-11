import StyledLink from "../StyledLink/StyledLink";
import styled from "styled-components";

// Styled Component
const StyledButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: var(--dark-green);
  margin-top: 20px;
`;

// Button components for all onClick buttons on page
export default function Button({ children, href }) {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
}
