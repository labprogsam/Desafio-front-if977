import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #262626;
  margin: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: #FFFFFF;
  padding: 24px;
  border-radius: 8px;
  max-width: 70%;
`;

const TitleBoard = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export {
  MainContainer,
  TitleBoard
}