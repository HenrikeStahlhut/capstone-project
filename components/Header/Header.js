import styled from "styled-components";

// Styled Component
const Headline = styled.h2`
  margin: 20px 50px;
`;

//Header Component for all Headers
export default function Header({ children }) {
  return (
    <>
      <Headline>{children}</Headline>
    </>
  );
}
