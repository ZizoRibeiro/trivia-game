import React from 'react';

import { Presentation } from './styles';
import { Container } from '../../shared/Container';
import { Title } from '../../shared/Title';
import { Question } from '../../shared/Question';
import { ButtonWrapper, ButtonText } from '../../shared/Button';

const Home = props => (
  <Container>
    <Title> Welcome to the Challenge!!</Title>
    <Presentation>You will be Presented with 10 True or False questions</Presentation>
    <Question>Can you score 100%?</Question>
    <ButtonWrapper onPress={() => props.navigation.navigate('Quizz')}>
      <ButtonText>BEGIN!!</ButtonText>
    </ButtonWrapper>
  </Container>
);

export default Home;
