import * as React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';

// import the data of iris
import irisData from "../../temporaryData/iris.json";

console.log("iris data", irisData);

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

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="IrisDataContainer">
            <TableContainer sx={{ maxHeight: 740 }} component={Paper}>
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
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default IrisData;