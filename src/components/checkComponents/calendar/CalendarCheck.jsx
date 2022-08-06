import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { addHours, format} from 'date-fns/esm'
import enUS from 'date-fns/locale/en-US'


import './calendarCheck.css'
import { useState } from 'react';

export const CalendarCheck = ({setDate}) => {
  const changeHandler = (e)=>{
    setDate(format(e,'yyy MMMM dd'));
  }
  return (
    <div className='calendar-component-container'>
      <Calendar 
        onChange={changeHandler} 
      />
    </div>
  )
}
