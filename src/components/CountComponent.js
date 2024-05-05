import React, { useState } from 'react';
import FizzTab from './FizzTab';
import BuzzTab from './BuzzTab';
import FizzBuzzTab from './FizzBuzzTab';

const CountComponent = () => {
    const [activeTab, setActiveTab] = useState('Fizz');

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="tabs">
                <button onClick={() => handleTabChange('Fizz')} className={activeTab === 'Fizz' ? 'active' : ''}>Fizz</button>
                <button onClick={() => handleTabChange('Buzz')} className={activeTab === 'Buzz' ? 'active' : ''}>Buzz</button>
                <button onClick={() => handleTabChange('FizzBuzz')} className={activeTab === 'FizzBuzz' ? 'active' : ''}>FizzBuzz</button>
            </div>
            <div className="tab-content">
                {activeTab === 'Fizz' && <FizzTab />}
                {activeTab === 'Buzz' && <BuzzTab />}
                {activeTab === 'FizzBuzz' && <FizzBuzzTab />}
            </div>
        </>
    );
};

export default CountComponent;
