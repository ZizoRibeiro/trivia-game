import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${props => (props.qbutton ? colors.secondary : colors.dark)};
  width: 202px;
  height: 40px;
  align-self: center;
  border-radius: 15px;
  margin-top: 50px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.falsyBtt ? colors.danger : colors.white)};
  text-align: center;
`;
