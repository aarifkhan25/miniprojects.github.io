import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import Details from "./Details.json";
import NetflixCard from './netflixCard.jsx';

function App() {
  

  return (
    <>{Details.map((data)=>{
      return(<NetflixCard data={data}></NetflixCard>)
    }
    )}</>
    )
}

export default App
