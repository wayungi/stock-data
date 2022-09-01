const LEAGUES = 'leagues/data/LEAGUES';

const initialState = {
  status: false,
  data: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAGUES:
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
};

/*
action createors
API used https://github.com/azharimm/football-standings-api
 */

const actionLeagues = () => async (dispatch) => {
  const response = await fetch(
    'https://api-football-standings.azharimm.site/leagues',
    {
      method: 'GET',
      headers: {},
    },
  );
  const result = await response.json();
  dispatch({ type: LEAGUES, payload: result });
};

export { actionLeagues };
export default gamesReducer;
