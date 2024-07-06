import React, { useState } from 'react';
import QRCode from  'react-qr-code';
console.log(QRCode)
const Qrcode = () => {
  const [link,setLink]=useState('')
  const[show,setShow]=useState(false)
  const handleSubmitButton=(evt)=>{
    evt.preventDefault();
    setShow(true)
}
const intStyle={
  padding:"5px",
  border:"2px solid blue",
  fontFamily:'sans-serifArial, Helvetica, sans-serif'
  }
  const btn={
    display:'block-inline',
    marginLeft:'-3px',
   padding:'7px',
    paddingLeft:'10px',
    paddingRight:'10px',
    backgroundColor:'blue',
    border:'none',
    borderRadius:'5px',
    color:'white',
    fontFamily: `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif `,
    cursor: 'pointer'
    }
    const qrStyle={
      width:'200px',
      height:'200px',
      marginTop:'30px',
      border:'5px solid blue',
      padding:'10px',
      borderRadius:'10px',
      color:"red"
    }
const dow_btn={
  display:'flex',
  border:'none',
  backgroundColor:"green",
  padding:'9px',
  fontFamily:'sans-serif',
  fontSize:'15px',
  borderRadius:'7px',
  color:'white',
  cursor: 'pointer'
}
  return (
    <div align='center'><h2>Qrcode Generater</h2>
    <form onSubmit={handleSubmitButton}>

    <input type="url" style={intStyle} value={link} placeholder='Enter Link here...' onChange={(evt)=>setLink(evt.target.value)} />

    <button style={btn}>Generate</button>
    </form>{
      show && <><QRCode value={link} style={qrStyle} />
        <a style={{textDecoration:'none'}} href={link} download='qrimage.png'> <button style={dow_btn}>Download QR</button></a>
        </>
      
    }
  
   
    </div>
  )
}

export default Qrcode;