import React from 'react'
import './footer.css'
import {LanguagePicker} from '../languagePicker/LanguagePicker'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 Veevart Museum</p>
            <div>
                <LanguagePicker/>
            </div>
        </div>
  )
}
