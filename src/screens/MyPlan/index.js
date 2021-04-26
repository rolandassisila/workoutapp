import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { DateRow, CollapsibleContainer } from 'containers';
import { IMAGES, WORKOUT_DATA } from 'constants';
import { Benchmark } from '../../containers';
import { Container, SectionTitle, DataContainer } from './styles';
function MyPlanScreen(props) {
  const { date, durationTime, weekDay, month, day } = props;

  const [workoutDay, setWorkOutDay] = useState(null);

  console.log(workoutDay);
  return (
    <Container>
      <DateRow onSelect={weekDay => setWorkOutDay(weekDay)} />
      {workoutDay ? (
        <DataContainer>
          <Benchmark
            weekDay={workoutDay.full_weekday}
            month={workoutDay.month}
            day={workoutDay.date}
            durationTime={workoutDay.duration}
          />
          {workoutDay.excersises_set.map((excersiseType, index) => {
            return (
              <CollapsibleContainer
                key={index}
                title={excersiseType.title}
                description={excersiseType.exercises.length}
                additionalInfo={excersiseType.exercises}
              />
            );
          })}
        </DataContainer>
      ) : (
        <SectionTitle>Please select date to workout</SectionTitle>
      )}
    </Container>
  );
}

MyPlanScreen.propTypes = {};

export default MyPlanScreen;
