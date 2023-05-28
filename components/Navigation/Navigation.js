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
            <StyledLink href="/">
              <IoHomeSharp size="30px" />
              <StyledListItem>Home</StyledListItem>
            </StyledLink>
          </StyledListItemContainer>
          {/* Add */}
          <StyledListItemContainer>
            <StyledLink href="/plants/add">
              <IoAddCircleSharp size="30px" />
              <StyledListItem>Add</StyledListItem>
            </StyledLink>
          </StyledListItemContainer>
          {/* todo */}
          <StyledListItemContainer>
            <IoCalendarClear size="30px" />
            <StyledListItem>To-Do</StyledListItem>
          </StyledListItemContainer>
        </StyledNav>
      </StyledNavContainer>
    </>
  );
}
