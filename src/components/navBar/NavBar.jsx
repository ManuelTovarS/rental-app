import './navBar.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

export const NavBar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('check')
    const checkNav = ()=>{
        setIsActive('check')
        navigate('/check')
    }
    const checkRegis = ()=>{
        setIsActive('registration')
        navigate('/registration')
    }
    const checkPay = ()=>{
        setIsActive('payment')
        navigate('/payment')
    }
    return (
        <div className='navBar-layout'>
            <div className="navBar-container">
                <div className="buttoms-container">
                    <button
                        className={`${isActive === 'check' ? 'button-nav active-nav':'button-nav completed-nav'}`}
                        onClick={checkNav}
                    ></button>
                    <div className={`${isActive === 'check' ? 'linea':'linea linea-pass'}`}></div>
                    <button
                        className={ `${isActive === 'registration'? 'button-nav active-nav':(isActive === 'payment'? 'button-nav completed-nav':'button-nav')}`}
                        onClick={checkRegis}                        
                    ></button>
                    <div className={`${isActive !== 'payment'? 'linea':'linea linea-pass'}`}></div>
                    <button
                        className={`${isActive === 'payment'? 'button-nav active-nav':'button-nav'}`}
                        onClick={checkPay}                                               
                    ></button>
                </div>
            </div>
            <div className='navBar-text'>
                <div className='text-container-navBar'>
                    <div>
                        <p>Check Availability</p>
                    </div>
                    <div className='registration-container'>
                        <p>Registration</p>
                    </div>
                    <div>
                        <p>Payment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
