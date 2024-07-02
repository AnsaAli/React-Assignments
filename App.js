import React from "react";
import ReactDOM from "react-dom/client";

//React list
const Cars=(props)=>(
    <li>This cars is in {props.brandName} brand.</li>
)

function Garage(){
    const nameOfCars=['Abc','Xyz']

    return(
        <>
        <h1>Cars brand names:</h1>
        <ul>
            {nameOfCars.map((car)=> <Cars brandName={car}/>)}
        </ul>
        </>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>)