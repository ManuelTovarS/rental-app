import {Route, Routes} from 'react-router-dom'
import {Check, Payment, Registration} from '../pages/index'
export const AppRouter = () => {
  const registrationStatus = 'authenticated'
  const paymentStatus = 'authenticated'
  return (
    <>
      <Routes>
        <Route path="/*" element={<Check/>}/>
        <Route path="/check" element={<Check/>}/>
        {registrationStatus !== 'not-authenticated' && <Route path="/registration" element={<Registration/>}/>}
        {paymentStatus !== 'not-authenticated' && <Route path="/payment" element={<Payment/>}/>}
      </Routes>
    </>
  )
}
