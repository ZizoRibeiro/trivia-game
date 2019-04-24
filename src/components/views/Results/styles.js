import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const TotalScore = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.white};
  padding-top: 20px;
`;

export const ResultContainer = styled.ScrollView.attrs({
  bounces: false,
})`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${colors.darkBlue};
`;

export const ResultQuestion = styled.Text`
  font-size: 18px;
  color: ${colors.light};
  font-weight: normal;
  text-align: left;
  padding-left: 40px;
`;
export const QuestionCorrect = styled.View`
  padding-top: 20px;
`;

export const QuestionFalse = styled.View``;

export const IconFalse = styled.Text`
  position: absolute;
  font-size: 45px;
  font-weight: bold;
  color: ${colors.danger};
  text-align: center;
  margin-left: 10px;

  margin-bottom: 10px;
`;

export const IconCorrect = styled.Text`
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: ${colors.success};
  text-align: center;
  margin-left: 10px;

  margin-bottom: 10px;
`;

export const QuestionResults = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  padding-top: 5px;
  padding-bottom: 15px;
  opacity: 0.9;
`;
