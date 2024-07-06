import React, { useState } from 'react'

const OtpGen = () => {
  const[otp,setOtp]=useState()
  const[Notp,setNOtp]=useState()
  const[enterOtp,setEnterOtp]=useState()
  const handle6DigitOtp=()=>{
const digits='0123456789';
let otp6="";
let length=digits.length;
for(let i=0;i<6;i++){
  otp6=otp6+digits[Math.floor(Math.random()*length)]
}
setOtp(otp6)
setNOtp("6 Digits")
  }
  const handle5DigitOtp=()=>{
const otp5=Math.floor(10000+Math.random()*90000);
setOtp(otp5)
setNOtp("5 Digits")
  }
  const handle4DigitOtp=()=>{
const digits = '0123456789'; 
    let otp4=""
    let len = digits.length 
    for (let i = 0; i < 4; i++) { 
         otp4= otp4+digits[Math.floor(Math.random() * len)]; 
    } 
setOtp(otp4)
setNOtp("4 Digit")
  }
  const handle3DigitOtp=()=>{
const otp3=Math.floor(100+Math.random()*900)
setOtp(otp3)
setNOtp("3 Digit")
  }
  const handle2DigitOtp=()=>{
    const otp2=Math.floor(10+Math.random()*90)
    setOtp(otp2)
    setNOtp("2 Digit")
      }
const handleEnterOtp=(evt)=>{
setEnterOtp(evt.target.value)
}
const handleLoginButton=()=>{
 
     if(!enterOtp ){
      window.alert('Please Enter Otp')
    }
   else if(enterOtp==otp){
      window.alert('Succefully Login') 
      setEnterOtp('')
     
      
        }
    
  else{
window.alert('wrong password try again after some time')

  }

}
const handleNewOtp=()=>{
  handle4DigitOtp()
}
  return (
    <div align="center" >
      <h2 style={{}}>Random OTP Generator</h2>
      <h3 style={{marginTop:'-8px'}}>And</h3>
      <h2 style={{marginTop:'-8px'}}>OTP Validation</h2>
      <h4 style={{marginTop:"-15px"}}>Your {Notp} OTP is={otp}</h4>
      <button style={{margin:"5px",marginTop:'-15px'}} onClick={handle6DigitOtp}> Generate 6 Digit Otp</button><br />
      <button style={{margin:"5px"}} onClick={handle5DigitOtp}> Generate 5 Digit Otp</button><br />
      <button style={{margin:"5px"}} onClick={handle4DigitOtp}> Generate 4 Digit Otp</button><br />
      <button style={{margin:"5px"}} onClick={handle3DigitOtp}> Generate 3 Digit Otp</button><br />
      <button style={{margin:"5px"}} onClick={handle2DigitOtp}> Generate 2 Digit Otp</button><br />
      <h4 style={{display:"inline-flex"}}>Enter OTP</h4> <input type="text" value={enterOtp} onChange={handleEnterOtp} /><br />
      <button onClick={handleLoginButton}>Login</button>
      <button onClick={handleNewOtp}>
        generate 4 digits otp
      </button>
    </div>
  )
}

export default OtpGen
