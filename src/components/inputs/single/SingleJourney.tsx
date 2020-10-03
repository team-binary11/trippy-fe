import React from 'react';
import ICalender from '../../..//lib/shared/inputs/calender/ICalender';
import IAutoComplete from '../../../lib/shared/inputs/autocomplete/IAutoComplete';
import ITimer from '../../../lib/shared/inputs/timer/ITimer';

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
