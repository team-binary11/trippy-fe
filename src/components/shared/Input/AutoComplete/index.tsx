import React, { useState } from 'react';
import { AutoComplete as PRAutoComplete } from 'primereact/autocomplete';

function IAutoComplete({ initialSelectedLocation, onSelectionChange }: { initialSelectedLocation: string | undefined, onSelectionChange: (value: string) => void }) {
    // let [selectedLocation, setLocation] = useState<string[] | undefined>(initialSelectedLocation)
    let [filteredLocations, setFilteredLocations] = useState<string[] | undefined>()
    const allLocations: string[] = ["Sirsa", "Delhi", "Patiala", "Gurgaon", "Shimla"];

    const searchLocation = (event: {
        originalEvent: Event;
        query: string;
    }) => {
        setTimeout(() => {
            let filteredLocations;
            if (!event.query.trim().length) {
                filteredLocations = [...allLocations];
            }
            else {
                filteredLocations = allLocations.filter((location) => {
                    return location.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredLocations(filteredLocations);
        }, 250);
    }

    return (
        <>
            <div className="card">
                {/* <h5>Location</h5> */}
                <PRAutoComplete value={initialSelectedLocation} suggestions={filteredLocations} completeMethod={searchLocation} onChange={(e) => onSelectionChange(e.value)} />
            </div>
        </>
    );
}

export default IAutoComplete;
