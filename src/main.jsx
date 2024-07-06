import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
//import DerivedState from './DerivedState.jsx'
// import LiftingState from './LiftingState'
//import ToggleSwitch from './ToggleSwitch.jsx'
//import Qrcode from './Qrcode.jsx'
import Calculator from './Calculator.jsx'
//import OtpGen from './OtpGen.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DerivedState></DerivedState> */}
    {/* <LiftingState></LiftingState> */}
    {/* <ToggleSwitch/> */}
    {/* <Qrcode/> */}
    <Calculator/>
    {/* <OtpGen/> */}
  </React.StrictMode>,
)
