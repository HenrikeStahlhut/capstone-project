import styled from "styled-components";

export const StyledOpenBtn = styled.button`
  position: absolute;
  top: 80px;
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
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: var(--background-green);
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 15px;
`;
export const StyledCloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 8px;
  border: none;
  background-color: var(--dark-green);
  border-radius: 50%;
  color: var(--white);
`;

export const StyledModalHeadline = styled.h2`
  font-size: 20px;
`;

export const StyledAddButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: var(--dark-green);
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 15px;
`;
