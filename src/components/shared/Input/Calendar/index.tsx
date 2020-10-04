import React from 'react';
import { Calendar as PRCalendar } from 'primereact/calendar';

function ICalender({ date, setUserDate }: { date: Date | Date[], setUserDate: (v: Date | Date[]) => void }) {
    // let [date, setDate] = useState<Date | Date[]>(new Date())

    const minDate = new Date();
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 15);

    return (
        <>
            <div className="card">
                <div className="p-fluid p-grid p-formgrid">
                    <div className="p-field p-col-12">
                        {/* <label htmlFor="minmax">Select Date</label> */}
                        <PRCalendar selectionMode="single" value={date} onChange={(e) => setUserDate(e.value)} minDate={minDate} maxDate={maxDate} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ICalender;
