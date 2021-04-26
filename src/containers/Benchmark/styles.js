import styled from 'styled-components';
import { COLORS, SemiBoldText } from 'styles';

const Container = styled.View`
  background-color: ${COLORS.LIGHT_GREY};
  padding: 30px 0;
  height: 275px;
`;
const TextContainer = styled.View``;
const IconContainer = styled.TouchableOpacity``;

const Icon = styled.Image`
  resize-mode: contain;
  height: 200px;
`;

const Divider = styled.View`
  padding: 5px 15px 15px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled(SemiBoldText)`
  font-size: 32px;
  padding-bottom: 6px;
`;
const DateText = styled(SemiBoldText)`
  font-size: 16px;
  padding-bottom: 6px;
`;
const DurationText = styled(SemiBoldText)`
  font-size: 16px;
  padding-bottom: 25px;
`;

export {
  Container,
  IconContainer,
  Icon,
  Divider,
  SectionTitle,
  TextContainer,
  DateText,
  DurationText,
};
