import * as React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

// import the data of iris
import irisData from "../../temporaryData/iris.json";

function createData(
    sepal_length : number,
    sepal_width  : number,
    petal_width  : number,
    petal_length : number,
    species      : string
) {
    return { sepal_length, sepal_width, petal_width, petal_length, species };
}

const rows = irisData.map((o: { petal_width: number; petal_length: number; sepal_length: number; sepal_width: number; species: string; }) => {
    return createData(o.petal_width, o.petal_length, o.sepal_length, o.sepal_width, o.species)
})


function IrisData() {

    return (
        <div className="IrisDataContainer">
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Petal_width</TableCell>
                            <TableCell align="center">Petal_length</TableCell>
                            <TableCell align="center">Sepal_length</TableCell>
                            <TableCell align="center">Sepal_width</TableCell>
                            <TableCell align="center">species</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                            >
                                <TableCell  align="center">{index}</TableCell>
                                <TableCell  align="center">{row.petal_width}</TableCell>
                                <TableCell align="center">{row.petal_length}</TableCell>
                                <TableCell align="center">{row.sepal_length}</TableCell>
                                <TableCell align="center">{row.sepal_width}</TableCell>
                                <TableCell align="center">{row.species}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default IrisData;