import React, { Component } from 'react';
import {
  withStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import styles from './styles';

class TableProduct extends Component {
  render() {
    const { classes, quantity } = this.props;
    return (
      <TableContainer component={Paper} className={classes.aroundTable}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Ngày</TableCell>
              <TableCell align="center">Sáng</TableCell>
              <TableCell align="center">Chiều</TableCell>
              <TableCell align="center">Tổng (KG)</TableCell>
              <TableCell align="center">Giá (ngàn VND)</TableCell>
              <TableCell align="center">Tổng tiền (ngàn VND)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quantity.map((row) => (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.date}
                className={classes.tableRow}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="center">{row.morning}</TableCell>
                <TableCell align="center">{row.afternoon}</TableCell>
                <TableCell align="center">
                  {row.morning + row.afternoon}
                </TableCell>
                <TableCell align="center">
                  {row.price ? row.price : '-'}
                </TableCell>
                <TableCell align="center">
                  {row.price ? (row.morning + row.afternoon) * row.price : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styles)(TableProduct);
