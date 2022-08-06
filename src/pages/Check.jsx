import React, { useState } from 'react'
import {CalendarCheck, SelectCategory, SelectTime, PackageChooser} from '../components/checkComponents'
import './styles/check.css'

export const Check = () => {
  const [packageSelected, setPackageSelected] = useState(false);
  return (
    <div className='check-layout'>
      <div className='check-select-container'>
        <p><b>1.</b> Select a category according to your activity</p>
        <SelectCategory/>
        <p><b>2.</b> Select the date you want for your activity</p>
        <CalendarCheck/>
        <p><b>3.</b> Select the time frame for your activity</p>
        <SelectTime/>
        <p><b>4.</b> Number of Guests</p>
        <input></input>
      </div>
      <div className='chech-choose-container'>
        <p><b>5.</b>Choose the package for you</p>
        {packageSelected 
          ? <PackageChooser/>
          : <div>The package will be available once you fill out all the fields</div> 
        }
      </div>
    </div>
  )
}

