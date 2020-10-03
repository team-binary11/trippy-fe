import React, { useState } from 'react';
import { Calendar as PRCalendar } from 'primereact/calendar';

function Calendar() {
    let [date, setDate] = useState<Date | Date[] | undefined>()

    const minDate = new Date();
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 15);

    return (
        <div>
            {console.log(date)}
            <div className="card">
                <div className="p-fluid p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="minmax">Select Date</label>
                        <PRCalendar value={date} onChange={(e) => setDate(e.value)} minDate={minDate} maxDate={maxDate} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
