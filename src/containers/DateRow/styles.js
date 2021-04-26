import styled from 'styled-components';
import { COLORS, SemiBoldText } from 'styles';

const Container = styled.View`
  background-color: ${COLORS.WHITE};
  width: 100%;
  flex: 1;
  padding: 30px 0;
`;

const IconContainer = styled.TouchableOpacity``;

const Icon = styled.Image`
  resize-mode: contain;
`;

const Header = styled.View`
  padding: 5px 15px 15px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled(SemiBoldText)`
  font-size: 32px;
`;

const WeekDayRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
const WeekDay = styled(SemiBoldText)`
  font-size: 12px;
`;
const WeekDayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const WeekDayNumberContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${COLORS.PALEGREEN};
  border-radius: 20px;
`;

const WeekDayNumber = styled.View``;
const WeekDayNumberText = styled(SemiBoldText)`
  font-size: 10px;
`;
export {
  Container,
  IconContainer,
  Icon,
  Header,
  SectionTitle,
  WeekDayRow,
  WeekDay,
  WeekDayContainer,
  WeekDayNumber,
  WeekDayNumberText,
  WeekDayNumberContainer,
};
