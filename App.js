import React from "react";
import ReactDOM from "react-dom/client";

const missedGoal = (
    <h1>Missed it </h1>
)
const successGoal = (
    <h2>Got it</h2>
)

const Result = (props) => {

    const isGoal = props.isGoal;

    if (isGoal) {
      return  successGoal 
    } else {
        return missedGoal 
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Result isGoal={true} />)