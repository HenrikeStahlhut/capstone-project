import styled from "styled-components";

export const StyledOpenBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  padding: 5px 7px;
  border: none;
  background-color: transparent;
  color: var(--highlight-green);
`;

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const StyledOverlay = styled.div`
  background: rgba(114, 122, 67, 0.5);
  top: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(1px);
`;
export const StyledModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;
export const StyledCloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
`;

export const StyledModalHeadline = styled.h2`
  font-size: 20px;
`;

export const StyledNameInput = styled.input`
  margin: 10px;
`;

export const StyledRoomMenu = styled.select`
  margin: 10px;
`;

export const StyledAddButton = styled.button`
  position: relative;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
`;
