import StyledLink from "@/components/StyledLink/StyledLink";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";

const StyledBackButton = styled.button`
  border: none;
  background-color: transparent;
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
