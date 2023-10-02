import styled from "styled-components";

export const ListMain = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0 30px;

  header {
    background-color: lightgray;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 40px;
    height: 50px;
    font-weight: bold;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 40px;
  }
`;
