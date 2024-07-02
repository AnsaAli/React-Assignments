import React,{ useState } from  "react";
import ReactDOM from "react-dom/client";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className="add">Add</button>
            <button onClick={decrement} className="decrement">Decrement</button>
        </div>
    )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />)