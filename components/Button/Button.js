import StyledLink from "../StyledLink/StyledLink";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: #9fa675;
  margin-top: 20px;
`;

export default function Button({ children, href }) {
  return (
    <>
      <StyledButton>
        <StyledLink href={href}>{children}</StyledLink>
      </StyledButton>
    </>
  );
}
