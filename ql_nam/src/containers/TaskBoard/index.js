import React, { Component } from 'react';
import {
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Button,
  Grid,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './styles';
import TableProduct from '../../components/TableProduct';
import TableEdition from '../../components/TableEdition';

class TaskBoard extends Component {
  renderTableProduct() {
    const { quantity } = this.props;
    let xhtml = null;
    xhtml = (
      <div container>
        <TableProduct quantity={quantity} />
        <TableEdition data={quantity} />
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes, farmers } = this.props;
    return (
      <div className={classes.taskBoard}>
        <form onSubmit={this.handleChangeUser} className={classes.form}>
          <TextField className={classes.textField} select label="nhà vườn">
            {farmers.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Box mx={1} className={classes.buttonXem}>
            <Button
              variant="contained"
              mx={1}
              color="primary"
              type="submit"
              // disabled={invalid || submit}
            >
              Xem
            </Button>
          </Box>
        </form>
        {this.renderTableProduct()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    farmers: state.task.farmers,
    quantity: state.task.quantity,
  };
};

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskBoard);
