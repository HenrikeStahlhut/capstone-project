import StyledLink from "../StyledLink/StyledLink";
import styled from "styled-components";

// Styled Component
export const StyledButton = styled.button`
  color: var(--white);
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: var(--dark-green);
  margin-top: 20px;
`;

// Button components for all onClick buttons on page
// TODO: remove wrapper component and directly export `StyledComponent`
export default function Button({ children }) {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
}
