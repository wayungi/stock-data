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

/* action createors */
const leagues = () => async (dispatch) => {
  const response = await fetch(
    'https://api-football-standings.azharimm.site/leagues',
    {
      method: 'GET',
      headers: {},
    },
  );
  const result = await response.json();
  dispatch({ type: LEAGUES, action: result });
};

export { leagues };
export default reducer;
