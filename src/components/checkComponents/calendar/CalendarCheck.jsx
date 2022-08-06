import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { addHours, format, parse, startOfWeek, getDay} from 'date-fns/esm'
import enUS from 'date-fns/locale/en-US'


import './calendarCheck.css'
import { useState } from 'react';

const locales = {
  'en-US': enUS,
}
const events = [{
  notes: 'Comprar Pastel',
  start: new Date(),
  end: addHours(new Date(), 2), //suma 2 horas al evento
  bgColor: '#1889FF',
  user: {
    _id: '123',
    name:'Manuel'
  }
}]
export const CalendarCheck = () => {
  const [date, setDate] = useState(new Date());
  const locale = 'fr-CA';
  console.log(format(date, 'MMM'));
  return (
    <div className='calendar-component-container'>
      <Calendar 
        onChange={setDate} 
        value={date} 
      />
    </div>
  )
}
