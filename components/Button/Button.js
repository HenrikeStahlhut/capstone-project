import StyledLink from "../StyledLink/StyledLink";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: var(--dark-green);
  margin-top: 20px;
`;

export default function Button({ children, href }) {
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
}
