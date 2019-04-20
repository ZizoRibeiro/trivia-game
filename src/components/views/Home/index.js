import React from 'react';

import { ButtonBegin, Container, Title, Presentation, Question } from './styles';

const Home = () => (
  <Container>
    <Title> Welcome to the Challenge!!</Title>
    <Presentation>You will be Presented with 10 True or False questions</Presentation>
    <Question>Can you score 100%</Question>
    <ButtonBegin>Begin!</ButtonBegin>
  </Container>
);

export default Home;
