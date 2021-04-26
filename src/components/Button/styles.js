import styled from 'styled-components';
import { COLORS, SemiBoldText } from 'styles';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled.TouchableOpacity`
  width: ${props => (props.small ? 125 : 340)}px;
`;

const Background = styled.View`
  height: ${props => (props.small ? 32 : 52)}px;
  width: 100%;
  padding: 1px;
  background-color: ${COLORS.PALEGREEN};
  border-radius: 10px;
`;

const Title = styled(SemiBoldText)`
  font-size: 16px;
  color: ${COLORS.BLACK};
`;

const Loading = styled.ActivityIndicator`
  margin-left: 10px;
`;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  border-radius: ${props => (props.small ? 15 : 25)}px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.PALEGREEN};
`;

export { Container, Title, Background, Wrapper, Loading };
