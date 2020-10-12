import React from 'react';

import ClockDisplay from '../../components/ClockDisplay';
import ClockList from '../../components/ClockList';

export default function Clock() {
    return(
        <div>
            <ClockDisplay/>
            <ClockList/>
        </div>
    );
}