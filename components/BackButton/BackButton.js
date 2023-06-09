import StyledLink from "@/components/StyledLink/StyledLink";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";

// Styled Component
const StyledBackButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 20px 30px;
`;

export default function BackButton({ href }) {
  return (
    <>
      <StyledBackButton>
        <StyledLink href={href}>
          <IoArrowBackOutline /> Back{" "}
        </StyledLink>
      </StyledBackButton>
    </>
  );
}
