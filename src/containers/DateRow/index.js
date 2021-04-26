import PropTypes from 'prop-types';
import {
  Container,
  Header,
  SectionTitle,
  IconContainer,
  Icon,
  WeekDayRow,
  WeekDay,
  WeekDayContainer,
  WeekDayNumber,
  WeekDayNumberText,
  WeekDayNumberContainer,
} from './styles';
import React, { useState } from 'react';
import { IMAGES, WORKOUT_DATA } from 'constants';

function DateRow(props) {
  const { onSelect } = props;

  return (
    <Container>
      <Header>
        <SectionTitle>My Plan</SectionTitle>
        <IconContainer>
          <Icon source={IMAGES.SETTINGS} />
        </IconContainer>
      </Header>
      <WeekDayRow>
        {WORKOUT_DATA.map((weekday, index) => {
          return (
            <WeekDayContainer key={index}>
              <WeekDay>{weekday.weekday}</WeekDay>
            </WeekDayContainer>
          );
        })}
      </WeekDayRow>
      <WeekDayRow>
        {WORKOUT_DATA.map((weekday, index) => {
          return (
            <WeekDayNumberContainer
              key={index}
              onPress={() => onSelect(weekday)}
            >
              <WeekDayNumber>
                <WeekDay>{weekday.date}</WeekDay>
              </WeekDayNumber>
            </WeekDayNumberContainer>
          );
        })}
      </WeekDayRow>
    </Container>
  );
}

DateRow.propTypes = {
  value: PropTypes.number,
  onSelect: PropTypes.func,
};

export default DateRow;
