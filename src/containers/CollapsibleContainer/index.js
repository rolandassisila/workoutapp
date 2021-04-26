import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  TitleContainer,
  Tilte,
  ButtonIcon,
  ButtonImage,
  SecondContainer,
  ExcerciseContainer,
  Description,
} from './styles';
import { IMAGES } from 'constants';
import { Button } from 'components';

function CollapsibleContainer(props) {
  const { title, additionalInfo, description } = props;
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <TitleContainer>
        <Tilte>{title}</Tilte>
        <Description>{description}</Description>
        <ButtonIcon onPress={toggle}>
          <ButtonImage
            source={expanded ? IMAGES.ARROW_UP : IMAGES.ARROW_DOWN}
          ></ButtonImage>
        </ButtonIcon>
      </TitleContainer>
      {expanded ? (
        <SecondContainer>
          {additionalInfo.map((excersise, index) => {
            return (
              <ExcerciseContainer key={index}>
                <Tilte>{excersise.title}</Tilte>
              </ExcerciseContainer>
            );
          })}
          <Button title={'START'} />
        </SecondContainer>
      ) : null}
    </Container>
  );
}

CollapsibleContainer.propTypes = {
  onSelect: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  additionalInfo: PropTypes.string,
};

export default CollapsibleContainer;
