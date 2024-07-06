import React,{useState} from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  const[on,setOn]=useState(false);
  const handleToggleButton=()=>{
    setOn(!on)
    
  }
const  toggleswitch= {backgroundColor: on ? '#4caf50':""}

 const Switch =on ? 'on':'off';
 const switchstate=on ? 'on':'off';

  return (
    <div className='toggle-switch' style={toggleswitch} onClick={handleToggleButton}>
      <div className={`switch ${Switch}`} >
        <span className='switch-state' >{switchstate}</span>
        </div>
    </div>
  )
}

export default ToggleSwitch
