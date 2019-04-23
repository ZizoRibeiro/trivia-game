import React from 'react';
import { AllHtmlEntities } from 'html-entities';

import {
  TotalScore,
  ResultContainer,
  ResultQuestion,
  IconCorrect,
  IconFalse,
  QuestionResults,
} from './styles';

import { Container } from '../../shared/Container';
import { Title } from '../../shared/Title';
import { ButtonWrapper, ButtonText } from '../Home/styles';

type Props = {
  answers: string,
  correctAnswerCount: number,
  onPlayAgain: () => void,
};

const htmlEntities = new AllHtmlEntities();

const Results = ({ answers, correctAnswerCount, onPlayAgain }) => (
  <Container>
    <Title>Your Score</Title>
    <TotalScore>
      {correctAnswerCount} / {answers.length}
    </TotalScore>
    <ResultContainer>
      {answers.map((answer, index) => (
        <QuestionResults key={index}>
          {answer.correctAnswer && <IconCorrect>+</IconCorrect>}
          {!answer.correctAnswer && <IconFalse>-</IconFalse>}
          <ResultQuestion> {htmlEntities.decode(answer.question.question)}</ResultQuestion>
        </QuestionResults>
      ))}
    </ResultContainer>
    <ButtonWrapper onPress={onPlayAgain}>
      <ButtonText>PLAY AGAIN</ButtonText>
    </ButtonWrapper>
  </Container>
);

export default Results;
