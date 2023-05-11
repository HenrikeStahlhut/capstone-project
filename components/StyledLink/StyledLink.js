import Link from "next/link";
import styled from "styled-components";

// Styled Component
const StyledLinkComponent = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default function StyledLink({ children, href }) {
  return <StyledLinkComponent href={href}>{children}</StyledLinkComponent>;
}
