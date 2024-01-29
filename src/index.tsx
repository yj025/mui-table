import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import {useRef, useState} from 'react';
import Button from "@mui/material/Button";

const Stopwatch = ()=>{
    const [startTime,setStartTime]=useState(null);
    const [now,setNow] = useState(null)
    const intervalRef=useRef(null)

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return(
        <>
            <h1>Time Stop Watch</h1>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handleStop}>Stop</Button>
            <p>{secondsPassed}</p>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")!).render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Stopwatch />
        </StyledEngineProvider>
    </React.StrictMode>
);


