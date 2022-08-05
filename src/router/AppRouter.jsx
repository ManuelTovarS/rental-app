import {Route, Routes} from 'react-router-dom'
import {Check, Payment, Registration} from '../pages/index'
export const AppRouter = () => {
  const authStatus = 'not-authenticated'
  return (
    <>
      <Routes>
        <Route path="/*" element={<Check/>}/>
        <Route path="/check" element={<Check/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </>
  )
}
