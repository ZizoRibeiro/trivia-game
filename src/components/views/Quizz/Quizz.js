import React from 'react';
import { AllHtmlEntities } from 'html-entities';

import { QuestionNumber } from './styles';

import { Container } from '../../shared/Container';
import { Title } from '../../shared/Title';
import { Question } from '../../shared/Question';

import { ButtonWrapper, ButtonText } from '../../shared/Button';

const htmlEntities = new AllHtmlEntities();

const Quizz = ({ question, navigation, answersCount, onAnswer }) => (
  <Container>
    <Title>{htmlEntities.decode(question.category)}</Title>

    <Question>{htmlEntities.decode(question.question)}</Question>

    <ButtonWrapper testID="trueAnswer" qbutton onPress={() => onAnswer(question, 'true')}>
      <ButtonText>YES! It's True.</ButtonText>
    </ButtonWrapper>
    <ButtonWrapper testID="falseAnswer" qbutton onPress={() => onAnswer(question, 'false')}>
      <ButtonText falsyBtt>NO...It's False.</ButtonText>
    </ButtonWrapper>
    <QuestionNumber>{answersCount} of 10</QuestionNumber>
  </Container>
);

export default Quizz;
