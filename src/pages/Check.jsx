import React, { useState } from 'react'
import {CalendarCheck, SelectCategory, SelectTime, PackageChooser} from '../components/checkComponents'
import './styles/check.css'

export const Check = () => {
  const [packageSelected, setPackageSelected] = useState(true);
  const [date, setDate] = useState(undefined);
  const [guest, setGuest] = useState(undefined)
  const [startTime, setStartTime] = useState(undefined);
  const [endTime, setEndTime] = useState(undefined);
  const [category, setCategory] = useState(undefined);
  const categories = [
    'Birthday Parties',
    'Category 2',
    'Category 3'
  ];
  const handlerInput = (e)=>{
    setGuest(e.nativeEvent.target.value)
  }
  return (
    <div className='check-layout'>
      <div className='check-select-container'>
        <p><b>1.</b> Select a category according to your activity</p>
        <SelectCategory
          categories= {categories}
          setCategory = {setCategory}
        />
        <p><b>2.</b> Select the date you want for your activity</p>
        <CalendarCheck 
          setDate = {setDate}
        />
        <p><b>3.</b> Select the time frame for your activity</p>
        <SelectTime
          setStartTime = {setStartTime}
          setEndTime = {setEndTime}
        />
        <p><b>4.</b> Number of Guests</p>
        <input onChange={handlerInput}></input>
      </div>
      <div className='chech-choose-container'>
        <p className='title-step'><b>5.</b> Choose the package for you</p>
        {packageSelected 
          ? <PackageChooser/>
          : <div>The package will be available once you fill out all the fields</div> 
        }
      </div>
    </div>
  )
}

