import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
    const [count, myCount] = useState(0);
    return (
        <div id="counter-container">
            <h1>Counter App</h1>
            <p>Currenr Count : {count} </p>
            <button id = "increment-button" onClick={() => {
                console.log(count);
                myCount(count + 1);
            }
            }>Increment</button><br/>
            <button id= "decrement-button"onClick={() => {
                if(count<=0) {
                    alert("count can not be zero");
                    setCount(0);

                } 
                myCount(count - 1);

            } }>Decrement</button>
        </div>
    )
}

export default Counter;