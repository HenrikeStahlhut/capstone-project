import styled from "styled-components";

export const StyledNavButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: var(--dark-green);
  margin-top: 20px;
`;

export const StyledNavContainer = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: var(--white);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  bottom: 0px;
`;

export const StyledNav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
`;

export const StyledListItem = styled.li`
  cursor: pointer;
  padding-top: 0.5em;
  font-size: 10px;
  text-align: center;
`;
