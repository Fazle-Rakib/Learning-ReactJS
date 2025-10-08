import React, {useState} from 'react';
import Button from './Button/Button';

function Counter() {

    const [count, setCount] = useState(0);

    const decrementCount = () =>{
        // setCount(count-1);
        // setCount(count-1);
        // setCount(count-1);

        // Updater function
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () =>{
        // setCount(0);
        setCount(c => c = 0);
    }

    const incrementCount = () =>{
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        // Updater function
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    return(
        <>
            <div className="counter-container">
                <p>{count}</p>
                <Button onClick={decrementCount} buttonInnerText="Decrement"/>
                <Button onClick={resetCount}  buttonInnerText="Reset"/>
                <Button onClick={incrementCount}  buttonInnerText="Increment"/>
            </div>
        </>
    );
}

export default Counter;