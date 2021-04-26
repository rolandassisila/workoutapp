import PropTypes from 'prop-types';
import {
  Container,
  SectionTitle,
  IconContainer,
  Icon,
  WeekDayRow,
  TextContainer,
  Divider,
  DateText,
  DurationText,
} from './styles';
import React, { useState } from 'react';
import { IMAGES } from 'constants';
import { Button } from 'components';
function Benchmark(props) {
  const { date, durationTime, weekDay, month, day } = props;

  return (
    <Container>
      <Divider>
        <TextContainer>
          <DateText>
            {weekDay} , {month} {day} {date}
          </DateText>
          <SectionTitle>Benchmark</SectionTitle>
          <DurationText>Duration: {durationTime}</DurationText>
          <Button small title={'START'} />
        </TextContainer>
        <IconContainer>
          <Icon source={IMAGES.EMPTY} />
        </IconContainer>
      </Divider>
    </Container>
  );
}

Benchmark.propTypes = {
  value: PropTypes.number,
  onSelect: PropTypes.func,
  weekDay: PropTypes.string,
  month: PropTypes.string,
  day: PropTypes.string,
  date: PropTypes.string,
  durationTime: PropTypes.string,
};

export default Benchmark;
