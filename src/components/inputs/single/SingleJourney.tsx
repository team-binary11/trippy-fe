import React from 'react';
import Calender from '../../shared/Input/Calendar';
import AutoComplete from '../../shared/Input/AutoComplete';
import Timer from '../../shared/Input/Timer';
import { Button as PRButton } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { InputActionTypes } from '../../../redux/actions';

function SingleJourney() {
    const dispatch = useDispatch();

    return (
        <>
            <h5>Single Journey Details</h5>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="sourceLocation">From</label>
                    <AutoComplete />
                </div>
                <div className="p-field p-col">
                    <label htmlFor="destinationLocation">To</label>
                    <AutoComplete />
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="sourceLocation">Pick A Date</label>
                    <Calender />
                </div>
                <div className="p-field p-col">
                    <label htmlFor="destinationLocation">Choose Time</label>
                    <Timer />
                </div>
            </div>
            <div className="demo-container p-p-4">
                <PRButton label="Submit" className="p-button-rounded p-d-block p-mx-auto" onClick={() => {
                dispatch({ type: InputActionTypes.SetInputs, payload: {} })
            }} />
            </div>
        </>
    );
}

export default SingleJourney;
