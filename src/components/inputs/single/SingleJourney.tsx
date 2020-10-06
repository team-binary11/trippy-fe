import React, { useState } from 'react';
import Calender from '../../shared/Input/Calendar';
import AutoComplete from '../../shared/Input/AutoComplete';
import Timer from '../../shared/Input/Timer';
import { Button as PRButton } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { InputActionTypes } from '../../../redux/actions';
import { IInputs } from '../../../lib/models/inputs';
import { getInputs } from '../../../redux/selectors/inputs';

function SingleJourney() {
    const dispatch = useDispatch();
    const defaultInputs = useSelector(getInputs)
    const [userSource, setUserSource] = useState<string>(defaultInputs.source.text);
    const [userDestination, setUserDestination] = useState<string>(defaultInputs.destination.text);
    const [userDate, setUserDate] = useState<Date | Date[]>(defaultInputs.departureDate);
    const [userTime, setUserTime] = useState<Date | Date[]>(defaultInputs.departureTime);


    const onSourceChange = (e: string) => {
        console.log('source', e)
        setUserSource(e)
    }

    const onDestinationChange = (e: string) => {
        console.log('destination', e)
        setUserDestination(e)
    }

    const onJourneyStartDateChange = (e: Date | Date[]) => {
        console.log('date', e)
        setUserDate(e)
    }

    const onJourneyStartTimeChange = (e: Date | Date[]) => {
        console.log('time', e)
        setUserTime(e)
    }

    const setUserInputs = () => {
        console.log('beforeDispatch')
        if (userSource && userDestination) {
            const completeInput: IInputs = {
                departureDate: userDate,
                departureTime: userTime,
                source: { text: userSource },
                destination: { text: userDestination },
                isRoundTrip: false
            }
            dispatch({ type: InputActionTypes.SetInputs, payload: completeInput });
        }
    }

    return (
        <>
            <h5>Single Journey Details</h5>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="sourceLocation">From</label>
                    <AutoComplete initialSelectedLocation={userSource} onSelectionChange={onSourceChange} />
                </div>
                <div className="p-field p-col">
                    <label htmlFor="destinationLocation">To</label>
                    <AutoComplete initialSelectedLocation={userDestination} onSelectionChange={onDestinationChange} />
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <label htmlFor="sourceLocation">Pick A Date</label>
                    <Calender date={userDate} setUserDate={onJourneyStartDateChange} />
                </div>
                <div className="p-field p-col">
                    <label htmlFor="destinationLocation">Choose Time</label>
                    <Timer time={userTime} setUserTime={onJourneyStartTimeChange} />
                </div>
            </div>
            <div className="demo-container p-p-4">
                <PRButton label="Submit" className="p-button-rounded p-d-block p-mx-auto" onClick={setUserInputs} />
            </div>
        </>
    );
}



export default SingleJourney;
