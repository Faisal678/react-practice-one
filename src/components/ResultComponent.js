import React from 'react';
import { useSelector } from 'react-redux';

const ResultComponent = () => {
    const result = useSelector(state => state.counter.result);

    return (
        <>
            {result.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </>
    );
};

export default ResultComponent;
