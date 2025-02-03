import styled from 'styled-components';

const MainContainer = styled.div`
  width: 115px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
  background-color: ${(props) => props.active ? "white" : "transparent"};
  color: ${(props) => props.active ? "#000000" : "white"};
  cursor: pointer;
`;

export {
  MainContainer
}