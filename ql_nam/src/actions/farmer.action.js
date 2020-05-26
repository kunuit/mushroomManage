import * as farmerConstants from '../constants/farmers.constant';

export const fetchListFarmer = (params = {}) => {
  return {
    type: farmerConstants.FETCH_FARMERS,
    payload: {
      params,
    },
  };
};

export const fetchListFarmerSuccess = (data) => {
  return {
    type: farmerConstants.FETCH_FARMERS_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListFarmerFail = (err) => {
  return {
    type: farmerConstants.FETCH_FARMERS_FAIL,
    payload: {
      err,
    },
  };
};
