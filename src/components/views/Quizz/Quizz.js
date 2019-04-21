import React from 'react';

import { Container, Title, Question, ButtonTrue, ButtonFalse, QuestionNumber } from './styles';

import { ButtonWrapper, ButtonText } from '../Home/styles';

const Quizz = ({ question, navigation }) => (
  <Container>
    <Title>{question.category}</Title>

    <Question>{question.question}</Question>

    <ButtonWrapper onPress={() => navigation.navigate('Results')}>
      <ButtonText>TRUE</ButtonText>
    </ButtonWrapper>
    <ButtonWrapper onPress={() => navigation.navigate('Results')}>
      <ButtonText>FALSE</ButtonText>
    </ButtonWrapper>
    <QuestionNumber>01 of 10</QuestionNumber>
  </Container>
);

export default Quizz;
