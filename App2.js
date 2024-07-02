import React from 'react';
import ReactDom from 'react-dom/client';

const Details=(props)=>(
  <div className='personal'>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
  </div>
)

function Display(){
    const data=[
        {id: 1, name: 'Ansa Ali', email: 'abc@gmail.com'},
        {id:2, name:'Arham', email:'arham@gmail.com'}
    ]

    return(
        <>
        {data.map((datas)=><Details key={datas.id} name={datas.name} email={datas.email}/>)}
        </>
    )
}

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<Display/>)