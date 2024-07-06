
import React,{useState} from 'react'
import style from './Calculator.module.css'
const Calculator = () => {
  //states
  const [value,setValue]=useState(['C','7','8',"9",'%','4','5','6','/','1','2','3','*','-','+','0','='])
  const[input,setInput]=useState('')

  //handlers
  const handleValue=(evt)=>{
    setValue(evt.target.value)
  }
  const handleButton=(buttontext)=>{
    if(buttontext==="C")
      {
setInput('')
      }
      else if(buttontext==="="){
const result=eval(input)
console.log("result",result)
setInput(result)
      }
      else{
        const newDisplay=input+buttontext;
        console.log('newDisplay',newDisplay)
        setInput(newDisplay)
      }

  }
  //css
  return (
    <><h1 align='center' style={{ marginTop:"100px"}}>Basic Calculation Calculator</h1>
      <div align="center" className={style.cal}>
    <textarea  type="text" className={style.cal_int} value={input} onChange={handleValue} cols="30" rows="10"></textarea><br/>
        {
          value.map((buttontext,index)=>{
            return <> <span className={
              `${buttontext==="C"? style.equal: style.cal_btn}
               ${buttontext==="="? style.equal: style.cal_btn}
               ${buttontext==="%"? style.equal: style.cal_btn}
               ${buttontext==="/"? style.equal: style.cal_btn}
               ${buttontext==="*"? style.equal: style.cal_btn}
               ${buttontext==="-"? style.equal: style.cal_btn}
               ${buttontext==="+"? style.equal: style.cal_btn}

              `} onClick={()=>handleButton(buttontext)}  key={index}>{buttontext}</span></>
        })
      }
      </div>
    </>
  )
}

export default Calculator
