import styled from "styled-components";

// Styled components

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 20em;
  background-color: pink;
  border-radius: 20px;
  margin: 30px auto;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  color: black;
`;

const ListIcon = styled.svg``;

export default function Navigation() {
  return (
    <>
      <NavContainer>
        <Nav>
          <ListItem>Add</ListItem>
        </Nav>
      </NavContainer>
    </>
  );
}
