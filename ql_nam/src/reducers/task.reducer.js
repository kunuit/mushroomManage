/* eslint-disable no-console */
import * as farmerConstants from '../constants/farmers.constant';

const initialState = {
  farmers: [],
  quantity: [
    {
      date: 1,
      morning: 40,
      afternoon: 50,
      price: 20,
    },
    {
      date: 2,
      morning: 50,
      afternoon: 80,
      price: 20,
    },
    {
      date: 3,
      morning: 45,
      afternoon: 55,
      price: 20,
    },
    {
      date: 4,
      morning: 43,
      afternoon: 52,
      price: null,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case farmerConstants.FETCH_FARMERS: {
      return {
        ...state,
        farmers: [],
      };
    }
    case farmerConstants.FETCH_FARMERS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        farmers: data,
      };
    }
    case farmerConstants.FETCH_FARMERS_FAIL: {
      const { err } = action.payload;
      return {
        ...state,
        farmers: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
