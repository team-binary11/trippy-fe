import React, { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import 'primeflex/primeflex.css';

function IAutoComplete() {
    let [selectedLocation, setLocation] = useState()
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
        <div>
            {console.log(selectedLocation)}
            <div className="card">
                <h5>Location</h5>
                <AutoComplete value={selectedLocation} suggestions={filteredLocations} completeMethod={searchLocation} onChange={(e) => setLocation(e.value)} />
            </div>
        </div>
    );
}

export default IAutoComplete;
