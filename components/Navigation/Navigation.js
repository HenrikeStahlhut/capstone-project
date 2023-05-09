import styled from "styled-components";
import Image from "next/image";
import { IoAddCircleSharp } from "react-icons/io5";

// Styled components

const NavContainer = styled.nav`
  position: fixed;
  width: 15em;
  background-color: #c2d9b4;
  border-radius: 30px;
  bottom: 2em;
  left: 5em;
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
  margin: 0px 10px;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding-top: 0.5em;
  font-size: 10px;
  text-align: center;
`;

// const ListIcon = styled.svg`
//   height: 30px;
//   width: 30px;
// `;

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <Nav>
          <ListItemContainer>
            <IoAddCircleSharp size="30px" />
            <ListItem>Home</ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <IoAddCircleSharp size="30px" />
            <ListItem>Add</ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <IoAddCircleSharp size="30px" />
            <ListItem>To-Do</ListItem>
          </ListItemContainer>
        </Nav>
      </NavContainer>
    </>
  );
}
