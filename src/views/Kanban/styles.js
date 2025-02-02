import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: #000000;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 24px;
  height: 100vh;
  box-sizing: border-box;
`;

const HeaderKanban = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BoardsKanban = styled.div`
  display: flex;
  flex-direction: row;
  height: 85%;
`;

const TitleKanban = styled.h1`
  font-size: 37px;
  color: white;
  margin-left: 20px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonKanban = styled.button`
  font-size: 18px;
  width: 140px;
  height: 40px;
  background-color: #2C2C2C;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 7px;
  cursor: pointer;
`;

export {
  MainContainer,
  HeaderKanban,
  TitleKanban,
  BoardsKanban,
  TagsContainer,
  ButtonKanban
}