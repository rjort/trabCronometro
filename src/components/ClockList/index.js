import React, {useState} from 'react';

import Fab from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import TableTimeZones from '../TableTimeZones';
import ListTimeZonesDialog from '../ListTimeZonesDialog';

export default function ClockList() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedTimeZones, setSelectedTimeZones] = useState(JSON.parse(localStorage.getItem('selectedTimeZones')) || []);

    const saveSelectedTimeZones = (data) => localStorage.setItem('selectedTimeZones', JSON.stringify(data));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (timeZone) => {
        setOpen(false);
        if(timeZone !== undefined && timeZone !== null) {
            setSelectedValue(timeZone);
            setSelectedTimeZones((prevState) => {
                const data = prevState;
                if (!data.includes(timeZone)) data.push(timeZone);
                saveSelectedTimeZones(data);
                return data;
            });
        }
    };

    const handleDelete = (index) => {
        setSelectedTimeZones((prevState) => {
            const data = prevState;
            data.splice(index, 1);
            saveSelectedTimeZones([...data]);
            return [...data];
        });
    };

    return (
        <div>
            <Fab color="primary" variant="outlined" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <ListTimeZonesDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            <TableTimeZones selectedTimeZones={selectedTimeZones} onDelete={handleDelete}/>
        </div>
    );
}