import React from 'react'
import './header.css'
import veevartImg from '../../assets/img/veevartLogo.svg'
export const Header = () => {
  return (
    <div className='header-container'>
        <div className='image-container'>
            <div className='image'>
                <img src={veevartImg}/>
            </div>
        </div>
    </div>
  )
}
