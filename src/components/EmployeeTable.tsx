import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import dataEmployee from './Data';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Data {
  id: number;
  fullName: string;
  departmentID: number;
}

const rows: Data[] = dataEmployee;

export default function DenseTable() {
  const classes = useStyles();
// вставить метод из файла дата сюда
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">DepartmentID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.fullName}</TableCell>
              <TableCell align="left">{row.departmentID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
