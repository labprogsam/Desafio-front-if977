import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: #FFFFFF;
  padding: 24px;
  border-radius: 8px;
  text-align: start;
  margin: 10px 0;
  width: 100%;
`;

const TitleCard = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const TagCard = styled.div`
  padding: 2px 4px;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  background-color: transparent;
`;

export {
  MainContainer,
  TitleCard,
  DescriptionCard,
  TagCard
}