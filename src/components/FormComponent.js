import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { runTest, resetState } from '../redux/counterSlice';

const FormComponent = () => {
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const handleRunTest = () => {
        dispatch(runTest(number));
    };

    const handleReset = () => {
        dispatch(resetState());
    };

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={handleRunTest}>Run Test</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default FormComponent;
