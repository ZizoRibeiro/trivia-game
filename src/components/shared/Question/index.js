import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const Question = styled.Text.attrs({
  numberOfLines: 5,
})`
  font-size: 22px;
  color: ${colors.secondary};
  padding-top: 100px;

  font-weight: bold;
  text-align: center;
`;
