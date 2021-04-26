import styled from 'styled-components';
import { COLORS, SemiBoldText } from 'styles';

const Container = styled.ScrollView`
  flex: 1;
`;
const DataContainer = styled.View`
  flex: 1;
`;
const SectionTitle = styled(SemiBoldText)`
  font-size: 32px;
  padding-bottom: 6px;
`;

export { Container, SectionTitle, DataContainer };
