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

export const Presentation = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  padding-top: 60px;
  text-align: center;
`;

export const Question = styled.Text`
  font-size: 22px;
  color: #fff;
  padding-top: 100px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  color: #fff;
  border-color: #fff;
  background-color: #979797;
  width: 202px;
  height: 40px;
  align-self: center;
  border-radius: 15px;
  margin-top: 40px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
