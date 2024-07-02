import React from "react";
import ReactDOM from 'react-dom/client';

const Cars= (props)=>(
    <li>These cars have brand {props.name}</li>
)

function Garage(){
    const cars=[
        {id:1, name:'Abc'},
        {id:2, name: 'Xyz'}
    ]

    return(
       <ul>
         {cars.map((car)=><Cars key={car.id} name={car.name} />)}
       </ul>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<Garage/>)