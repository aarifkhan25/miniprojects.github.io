import React,{useState} from 'react'

const DerivedState = () => {
  const [users,setUsers]=useState([{name:"raj" ,age:21},{name:"rahul",age:22},{name:"pappu" ,age:25}])
  //Derived state:count of users
  const userCount=users.length;
  console.log(users);
  //Derived states: average age of users
   const AgeAverage=(users.reduce((accum,element)=>accum+element.age,0))/userCount;
  
  return (
    <div style={{textAlign:'center'}}>
      <h1>User List</h1>
      <ul style={{listStyle:"none"}}>
        {users.map((element,index)=>{
          return <li key={index}>{element.name}-{element.age} year old</li>
        })}
       
        <li>UserCount={userCount}</li>
        <li>User AgeAverage={AgeAverage}</li>
      </ul>
    </div>
  )
}

export default DerivedState