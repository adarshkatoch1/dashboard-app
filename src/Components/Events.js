import React from 'react'

const Events = () => {
   const myfunc = (a)=> {
    alert(a)
   }
  return (
    <div>
      <button onClick={()=> myfunc("raju")}>Click me</button>
    </div>
  )
}

export default Events;

