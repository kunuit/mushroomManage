import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/core';
import MaterialTable from 'material-table';
import styles from './styles';

const columns = [
  { title: 'Ngày', field: 'date' },
  {
    title: 'Sáng',
    field: 'morning',
    initialEditValue: 'initial edit value',
  },
  {
    title: 'Chiều',
    field: 'afternoon',
    initialEditValue: 'initial edit value',
  },
  { title: 'Giá', field: 'price', type: 'numeric' },
];

class TableEdition extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.tableEdition}>
        <MaterialTable
          title="Chỉnh sửa Sản Phẩm"
          columns={columns}
          data={data}
          options={{
            headerStyle: {
              textAlignLast: 'center',
              backgroundColor: '#00000040',
            },
            rowStyle: {
              textAlignLast: 'center',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            },
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  // setData([...data, newData]);
                  // resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  console.log(newData, oldData);
                  // const dataUpdate = [...data];
                  // const index = oldData.tableData.id;
                  // dataUpdate[index] = newData;
                  // setData([...dataUpdate]);
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  // const dataDelete = [...data];
                  // const index = oldData.tableData.id;
                  // dataDelete.splice(index, 1);
                  // setData([...dataDelete]);
                  // resolve();
                }, 1000);
              }),
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TableEdition);
