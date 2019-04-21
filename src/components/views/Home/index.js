import React from 'react';

import { Container, Title, Presentation, Question, ButtonWrapper, ButtonText } from './styles';

const Home = props => (
  <Container>
    <Title> Welcome to the Challenge!!</Title>
    <Presentation>You will be Presented with 10 True or False questions</Presentation>
    <Question>Can you score 100%</Question>
    <ButtonWrapper onPress={() => props.navigation.navigate('Quizz')}>
      <ButtonText>BEGIN!!</ButtonText>
    </ButtonWrapper>
  </Container>
);

export default Home;
