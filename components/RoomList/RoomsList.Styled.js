export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  margin: 0px 40px 100px 40px;
`;

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
  font-weight: bold;
  color: red;
`;

export const StyledErrorH3 = styled.h3`
  margin: 5px;
`;

export const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
  font-weight: bold;
`;
