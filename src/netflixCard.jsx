import React from "react";
import "./App.css"
const NetflixCard=(props)=>{
  const {image,name,rating,genre,description,category}=props.data
  const rat=rating>=7?"first":"second";
  const but=rating >7.5?"btn1":"btn2";
  return(
<>
      <div >
      
      <img src={image} id="im" width={150} height={200} alt="" />
         <h2>Name:{name}</h2>
         <h3>Rating:<span className={`rating ${rat}`}>{rating}</span></h3>
         <h3 style={{marginTop:"-5px"}}>Genre:{genre}</h3>
         <p>Description:{description}</p>
         <h4 id="h">Category:{category}</h4>
         <button className={but}>Watch now</button>
         
   
       </div>
    </>
  )
}
export default NetflixCard;