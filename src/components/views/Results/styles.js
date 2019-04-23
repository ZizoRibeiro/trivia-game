import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #255fa3;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  padding-top: 200px;
`;

export const TotalScore = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  padding-top: 20px;
`;

export const ResultContainer = styled.ScrollView`
  padding-top: 20px;
`;

export const QuestionCorrect = styled.View`
  padding-top: 20px;
`;

export const IconCorrect = styled.Text`
  font-size: 20px;
  color: #0dffc9;
`;

export const Question = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const QuestionFalse = styled.View``;

export const IconFalse = styled.Text`
  font-size: 20px;
  color: #d0021b;
`;

export const ButtonPlayAgain = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  padding-bottom: 40px;
`;

export const QuestionResults = styled.TouchableOpacity`
  background-color: #979797;
`;
