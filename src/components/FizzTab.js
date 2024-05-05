import React from 'react';
import { useSelector } from 'react-redux';

const FizzTab = () => {
    const counts = useSelector(state => state.counter.counts);

    return (
        <>
            <p>Fizz Count: {counts.fizz}</p>
        </>
    );
};

export default FizzTab;
