import React from 'react';
import {getDiffByTwoTimes} from '../componentsUtils';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

export default function TableChronometer({markedTimes}) {
    return (
        <div>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableBody>
                        {markedTimes.map((markedTime, index) => (
                            <TableRow key={index+1}>
                                <TableCell component="th" scope="row">
                                    <Typography variant="body1" noWrap> 
                                        {index+1}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1" noWrap> 
                                        {markedTime}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1" noWrap>
                                        {getDiffByTwoTimes(markedTime, markedTimes[index-1])}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}