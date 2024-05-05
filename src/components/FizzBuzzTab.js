import React from 'react';
import { useSelector } from 'react-redux';

const FizzBuzzTab = () => {
    const counts = useSelector(state => state.counter.counts);

    return (
        <>
            <p>FizzBuzz Count: {counts.fizzBuzz}</p>
        </>
    );
};

export default FizzBuzzTab;
