/** @format */

const LEAGUES = 'leagues/data/LEAGUES';

const initialState = {
  status: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAGUES:
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
};
