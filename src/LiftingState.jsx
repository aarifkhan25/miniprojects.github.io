import React,{useState} from 'react'

const LiftingState = () => {
  const [inputValue,setInputValue]=useState("")
  return (
    <div>
      <div align='center'style={{marginTop:'300px'}}>
<InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
<DisplayComponent inputValue={inputValue} />
      </div>
    </div>
  )
}
const InputComponent=({inputValue,setInputValue})=>{
  const handleButton=(evt)=>{
    setInputValue(evt.target.value)
  }
return <div>
  <input type="text" value={inputValue} onChange={handleButton}/>
</div>
}
const DisplayComponent=({inputValue})=>{
  return<> <h1>your output Display here={inputValue}</h1></>
}

export default LiftingState
