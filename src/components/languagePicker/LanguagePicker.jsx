import React from 'react'
import './languagePicker.css'
export const LanguagePicker = () => {
    const languages = [
        'English',
        'Spanish',
        'Japanese'
    ]
    return (
        <div className='language-container'>
            <div className='text-container-language'>
                <p>Language </p>
            </div>
            <select name="language" id="language">
                {languages.map((element,i) => {
                    return(<option key={i} value ={element}> {element}</option>)
                })}
            </select>
        </div>
    )
}
