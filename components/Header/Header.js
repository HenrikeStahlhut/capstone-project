import styled from "styled-components";

// Styled Component
const StyledHeadline = styled.h2`
  margin: 20px 50px;
`;

//Header Component for all Headers
export default function Header({ children }) {
  return (
    <>
      <StyledHeadline>{children}</StyledHeadline>
    </>
  );
}
