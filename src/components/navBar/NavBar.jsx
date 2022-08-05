import './navBar.css'

export const NavBar = () => {
  return (
    <div>
        <div className="navBar-container">
            <div className="buttoms-container">
                <button></button>
                <div className='linea'></div>
                <button></button>
                <div className='linea'></div>
                <button></button>
            </div>
        </div>
        <div className='navBar-text'>
            <div className='text-container'>
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
