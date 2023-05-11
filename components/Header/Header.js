import styled from "styled-components";

// Styled Component
const StyledHeadline = styled.h2`
  margin: 20px 50px;
`;

// Header component for all headers
export default function Header({ children }) {
  return (
    <>
      <StyledHeadline>{children}</StyledHeadline>
    </>
  );
}
