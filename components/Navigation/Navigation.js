import styled from "styled-components";
import Link from "next/link";
import {
  IoAddCircleSharp,
  IoHomeSharp,
  IoCalendarClear,
} from "react-icons/io5";
import StyledLink from "../StyledLink/StyledLink";

// Styled components

const NavContainer = styled.nav`
  position: fixed;
  width: 15em;
  background-color: #c2d9b4;
  border-radius: 30px;
  bottom: 2em;
  left: 4.5em;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding-top: 0.5em;
  font-size: 10px;
  text-align: center;
`;

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <Nav>
          {/* Home */}
          <ListItemContainer>
            <StyledLink href="/" scroll={true}>
              <IoHomeSharp size="30px" />
              <ListItem>Home</ListItem>
            </StyledLink>
          </ListItemContainer>
          {/* Add */}
          <ListItemContainer>
            <StyledLink href="/add-plants" scroll={true}>
              <IoAddCircleSharp size="30px" />
              <ListItem>Add</ListItem>
            </StyledLink>
          </ListItemContainer>
          {/* To-Do */}
          <StyledLink href="/">
            <ListItemContainer>
              <IoCalendarClear size="30px" scroll={true} />
              <ListItem>To-Do</ListItem>
            </ListItemContainer>
          </StyledLink>
        </Nav>
      </NavContainer>
    </>
  );
}
