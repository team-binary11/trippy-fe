import React from 'react';
import { Calendar as PRCalendar } from 'primereact/calendar';

function ITimer({ time, setUserTime }: { time: Date | Date[], setUserTime: (v: Date | Date[]) => void }) {

    return (
        <>
            <div className="card">
                <div className="p-fluid p-grid p-formgrid">
                    <div className="p-field p-col-12">
                        {/* <label htmlFor="minmax">Select Date</label> */}
                        <PRCalendar value={time} onChange={(e) => setUserTime(e.value)} timeOnly hourFormat="12" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ITimer;
