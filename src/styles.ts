import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

export const BoxSelector = styled.div`
  width: 250px;
  height: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border: 1px solid lightgrey;
`;

export const ContainerCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid lightgrey;
  padding: 5px 10px;
  width: 98%;

  div {
    display: flex;
    gap: 40px;
  }
`;

export const MainButton = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;

  button {
    width: 180px;
    border: none;
    border-radius: 5px;
    height: 40px;
    background-color: #2597a7;
    color: #fff;
  }
`;
