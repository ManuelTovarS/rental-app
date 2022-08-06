import TimePicker from 'rc-time-picker';
import moment from "moment";
import { useState } from 'react';

import 'rc-time-picker/assets/index.css';
import { addHours, format, parse, startOfWeek, getDay} from 'date-fns/esm'

import './selectTime.css'
export const SelectTime = ({setStartTime, setEndTime}) => {


  const timeStartHandler = (t)=>{
      setStartTime(moment(t.props.value).format('HH:mm'));
  }
  const timeEndHandler = (t)=>{
      setEndTime(moment(t.props.value).format('HH:mm'));
  }
  return (
    <div className='selecTime-component-container'>
      <div className='inputStartTime-container'>
        <TimePicker
          placeholder = 'Start time'
          showSecond={false}
          use12Hours={true}
          addon={timeStartHandler}
        />
      </div>
       <div className='inputEndTime-container'>
        <TimePicker
          placeholder = 'End time'
          showSecond={false}
          use12Hours={true}
          addon={timeEndHandler}
          />
       </div>
    </div>
  )
}
