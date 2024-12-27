import React, { useState, useRef, useEffect } from "react";


export default function TimerButton() {
let timer = useRef(null)
const [active, setActive] = useState(false);
const [counter, setCounter] = useState(0);

useEffect(() => {
    if(!active) {
        clearInterval(timer.current)
        return;
    }
    if(active){
        timer.current = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 1000);
    }
},[active])

const reset = () => {
    setCounter(0);
}


return (
      <div>
        <button className="mr-10" onClick={() => setActive((prev) => !prev)}>{active ? "Stop": "Start"}</button>
        <button onClick={() => reset()}>Reset</button>
        <div className="mt-10">{counter}</div>
        
      </div>
  );
}
