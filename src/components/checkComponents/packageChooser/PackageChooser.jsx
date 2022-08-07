import './packageChooser.css'
import { RentalEvent } from '../../rentalEvent/rentalEvent'

export const PackageChooser = () => {
  return (
    <div className='rentals-container'>
      <RentalEvent />
      <RentalEvent />
      <RentalEvent />
    </div>
  )
}
