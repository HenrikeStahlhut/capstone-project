import styled from "styled-components";
import Link from "next/link";
import {
  IoAddCircleSharp,
  IoHomeSharp,
  IoCalendarClear,
} from "react-icons/io5";
import {
  StyledNav,
  StyledListItem,
  StyledNavContainer,
  StyledListItemContainer,
} from "./Navigation.Styled";
import StyledLink from "../StyledLink/StyledLink";

export default function Navigation() {
  return (
    <>
      <StyledNavContainer>
        <StyledNav>
          {/* Home */}
          <StyledListItemContainer>
            <StyledLink href="/" scroll={true}>
              <IoHomeSharp size="30px" />
              <StyledListItem>Home</StyledListItem>
            </StyledLink>
          </StyledListItemContainer>
          {/* Add */}
          <StyledListItemContainer>
            <StyledLink href="/plants/add" scroll={true}>
              <IoAddCircleSharp size="30px" />
              <StyledListItem>Add</StyledListItem>
            </StyledLink>
          </StyledListItemContainer>
          {/* tod */}
          <StyledLink href="/">
            <StyledListItemContainer>
              <IoCalendarClear size="30px" scroll={true} />
              <StyledListItem>To-Do</StyledListItem>
            </StyledListItemContainer>
          </StyledLink>
        </StyledNav>
      </StyledNavContainer>
    </>
  );
}
