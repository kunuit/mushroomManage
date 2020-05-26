import React, { Component } from 'react';
import {
  withStyles,
  MenuItem,
  TextField,
  Box,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import TableProduct from '../../components/TableProduct';
import TableEdition from '../../components/TableEdition';
import * as farmerActions from '../../actions/farmer.action';

class TaskBoard extends Component {
  componentDidMount() {
    const { farmerActionCreators } = this.props;
    const { fetchListFarmer } = farmerActionCreators;
    fetchListFarmer();
  }

  renderTableProduct() {
    const { quantity } = this.props;
    let xhtml = null;
    xhtml = (
      <div container>
        <TableProduct quantity={quantity} />
        <TableEdition quantity={quantity} />
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
              <MenuItem key={option.idFarmer} value={option.name}>
                {option.name}
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

TaskBoard.propTypes = {
  classes: PropTypes.object,
  farmerActionCreators: PropTypes.shape({
    fetchListFarmer: PropTypes.func,
  }),
  farmers: PropTypes.array,
  quantity: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    farmers: state.task.farmers,
    quantity: state.task.quantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    farmerActionCreators: bindActionCreators(farmerActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskBoard);
