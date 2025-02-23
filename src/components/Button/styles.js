import styled from 'styled-components';

const MainContainer = styled.div`
  width: 160px;
  border-radius: 8px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  background-color: ${(props) => props.background ? props.background : "transparent"};
  color: ${(props) => props.color ? props.color : "white"};
  cursor: pointer;
  border: none;
  padding: 8px;

  &:hover {
    opacity: 0.7;
  }
`;

export {
  MainContainer
}