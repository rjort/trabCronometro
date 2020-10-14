import React from 'react';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";

import TypographyClockDisplay from '../TypographyClockDisplay';

export default function TableTimeZones({selectedTimeZones, onDelete}) {
    const handleDelete = (index) => {
        onDelete(index);
    };

    return (
        <div>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableBody>
                        {selectedTimeZones.map((timeZone, index) => (
                            <TableRow key={timeZone.id}>
                            <TableCell component="th" scope="row">
                                <AccessTimeIcon/>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1" align="left" noWrap>{timeZone.label}</Typography>
                                <Typography variant="body2" align="left" noWrap>{timeZone.value}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <TypographyClockDisplay timeZone={timeZone.value} align="left"/>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton
                                color="inherit"
                                aria-label="mode"
                                onClick={() => handleDelete(index)}
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}