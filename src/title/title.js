import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Title = () => {
    const dispatch = useDispatch()
    const round = useSelector(state => state.round)
    const big = () => {
        dispatch({type: 'START'})
    }

    const test = () => {
        dispatch({type: 'SET'})
    }

    const reset = () => {
        dispatch({type: 'RESET'})
    }

    const run = () => {
        dispatch({type: 'RUN'})
    }

    const open = () => {
        dispatch({type: 'OPEN'})
    }
    return (
        <div>
            <p>{round}</p>
            <button onClick={big}>start</button>
            <button onClick={test}>test</button>
            <button onClick={reset}>reset</button>
            <button onClick={run}>run</button>
            <button onClick={open}>open</button>
        </div>
    );
};

export default Title;