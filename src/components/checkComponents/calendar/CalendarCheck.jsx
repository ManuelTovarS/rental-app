import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours, format, parse, startOfWeek, getDay} from 'date-fns/esm'
import enUS from 'date-fns/locale/en-US'

import './calendarCheck.css'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
localizer.formats.weekdayFormat = 'ccc'
localizer.formats.monthHeaderFormat = 'MMM yyy'
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
  console.log(localizer)
  return (
    <div className='calendar-component-container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month']}
        style={{ height: 300}}
        messages={
          {
            next: ">",
            previous: "<",
            year: 'Year'
          }
        }
      />
    </div>
  )
}
