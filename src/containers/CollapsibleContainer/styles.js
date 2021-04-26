import styled from 'styled-components';
import { COLORS, SemiBoldText } from 'styles';

const Container = styled.View`
  margin: 10px;
  overflow: hidden;
`;
const TitleContainer = styled.View`
  flex-direction: row;
`;

const Tilte = styled(SemiBoldText)`
  flex: 1px;
  padding: 10px;
  font-size: 18px;
`;
const Description = styled(SemiBoldText)`
  flex: 1px;
  padding: 10px;
  font-size: 18px;
`;

const Button = styled.TouchableOpacity`
  color: ${COLORS.GREY};
  font-size: 12px;
`;

const ButtonImage = styled.Image`
  width: 30px;
  height: 25px;
`;

const SecondContainer = styled.View`
  padding: 10px;
  padding-top: 0px;
`;
const ExcerciseContainer = styled.View``;
export {
  Container,
  TitleContainer,
  Tilte,
  Button,
  ButtonImage,
  SecondContainer,
  Description,
  ExcerciseContainer,
};
