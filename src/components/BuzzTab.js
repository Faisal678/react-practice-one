import React from 'react';
import { useSelector } from 'react-redux';

const BuzzTab = () => {
    const counts = useSelector(state => state.counter.counts);

    return (
        <>
            <p>Buzz Count: {counts.buzz}</p>
        </>
    );
};

export default BuzzTab;
