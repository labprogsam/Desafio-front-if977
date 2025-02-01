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

export {
  MainContainer,
  TitleCard,
  DescriptionCard
}