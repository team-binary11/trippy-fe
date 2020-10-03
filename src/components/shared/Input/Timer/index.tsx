import React, { useState } from 'react';
import { Calendar as PRCalendar } from 'primereact/calendar';

function ITimer() {
    let [time, setTime] = useState<Date | Date[] | undefined>()

    return (
        <>
            {console.log(time)}
            <div className="card">
                <div className="p-fluid p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-4">
                        {/* <label htmlFor="minmax">Select Date</label> */}
                        <PRCalendar value={time} onChange={(e) => setTime(e.value)} timeOnly hourFormat="12" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ITimer;
