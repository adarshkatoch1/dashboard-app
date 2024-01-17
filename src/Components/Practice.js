import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Practice = () => {
    let fooditems = ["Vegetables", "Milk", "Bread"];
  return (
    <div>
    <h1>Healthy Food</h1>
     <ul class="list-group">
        {fooditems.map( (item) =>(
            <li class="list-group-item">{item}</li>
        ) )}
</ul>
    </div>
  )
}

export default Practice;
