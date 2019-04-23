import React from 'react';

import {
  Container,
  Title,
  TotalScore,
  ResultContainer,
  QuestionCorrect,
  IconCorrect,
  Question,
  QuestionFalse,
  IconFalse,
  QuestionResults,
} from './styles';

import { ButtonWrapper, ButtonText } from '../Home/styles';

const Results = props => (
  <Container>
    <Title>Your Score</Title>
    <TotalScore>6 / 15</TotalScore>
    <ResultContainer>
      <QuestionResults>
        <IconCorrect>+</IconCorrect>
        <Question> Stewart Copeland was the The police Drummer?</Question>
      </QuestionResults>
      <QuestionResults>
        <IconFalse>-</IconFalse>
        <Question> Stewart Copeland was the The police Drummer?</Question>
      </QuestionResults>
    </ResultContainer>
    <ButtonWrapper onPress={() => props.navigation.navigate('Home')}>
      <ButtonText>PLAY AGAIN?</ButtonText>
    </ButtonWrapper>
  </Container>
);

export default Results;
