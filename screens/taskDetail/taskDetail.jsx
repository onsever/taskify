import { View, Text } from 'react-native'
import React from 'react'
import {Calendar, CalendarList, Agenda, WeekCalendar} from 'react-native-calendars';


const taskDetail = ({navigation}) => {
    return (
   <View>
      
      <Calendar className={"rounded-md mt-10 mb-10 shadow-md"} 
      markingType={'period'}
      markedDates={{
        '2022-11-15': {marked: true, dotColor: '#50cebb'},
        '2022-11-16': {marked: true, dotColor: '#50cebb'},
        '2022-11-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
        '2022-11-22': {color: '#70d7c7', textColor: 'white'},
        '2022-11-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
        '2022-11-24': {color: '#70d7c7', textColor: 'white'},
        '2022-11-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
      }}
      onDayPress={day => {
        console.log('selected day', day);
        <Text>Pressed</Text>
      }}
    />
    
      
      
    </View>
)
}

export default taskDetail