import './selectTime.css'
export const SelectTime = () => {
  return (
    <div className='selecTime-component-container'>
      <div className='inputTime-container'>
        <input type="time"
        min="09:00" max="18:00" required></input>
      </div>
       <p>to</p>
       <div className='inputTime-container'>
        <input type="time"
        min="09:00" max="18:00" required></input>
       </div>
    </div>
  )
}
