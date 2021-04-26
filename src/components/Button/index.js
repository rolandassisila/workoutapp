import React from 'react';
import * as PropTypes from 'prop-types';
import { Background, Container, Title, Wrapper } from './styles';
import { BUTTONS, COLORS } from 'styles';

function Button(props) {
  const { title, onPress, small } = props;

  return (
    <Container small={small} onPress={onPress}>
      <Background small={small}>
        <Wrapper small={small}>
          <Title small={small}>{title}</Title>
        </Wrapper>
      </Background>
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,

  onPress: PropTypes.func,
};

Button.defaultProps = {
  small: false,

  onPress: () => {},
};

export default Button;
