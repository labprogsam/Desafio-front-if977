import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #262626;
  margin: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 0 24px 24px 24px;
  border-radius: 8px;
  max-height: 100%;
  overflow-y: scroll;
  width: 100%;

  a {
    width: 100%;
  }
`;

const TitleBoard = styled.div`
  position: sticky;
  background-color: #262626;
  top: 0px;
  font-size: 28px;
  font-weight: 700;
  padding: 10px 0;
  width: 100%;
  padding: 24px 0 13px 0;
`;

export {
  MainContainer,
  TitleBoard
}