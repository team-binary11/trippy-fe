import React from 'react';
import ICalender from '../../shared/Input/Calendar';
import IAutoComplete from '../../shared/Input/AutoComplete';
import ITimer from '../../shared/Input/Timer';

function SingleJourney() {
    return (
        <>
            <h5>Single Journey Details</h5>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="sourceLocation">From</label>
                    <IAutoComplete />
                </div>
                <div className="p-field p-col">
                    <label htmlFor="destinationLocation">To</label>
                    <IAutoComplete />
                </div>
                </div>
                <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="sourceLocation">Pick A Date</label>
                    <ICalender />
                </div>
                <div className="p-field p-col">
                    <label htmlFor="destinationLocation">Choose Time</label>
                    <ITimer />
                </div>
            </div>
        </>
    );
}

export default SingleJourney;
