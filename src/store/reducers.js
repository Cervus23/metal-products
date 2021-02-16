import { TOGGLE_LANG_SELECTOR, TOGGLE_SEARCH } from './actions'

const initialState = {
  activeLangSelector: false, 
  activeSearch: false, 
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LANG_SELECTOR:
      return {...state, activeLangSelector: !state.activeLangSelector};
    case TOGGLE_SEARCH:
      return {...state, activeSearch: !state.activeSearch};
    default:
      return { ...state };
  }
};

export default reducer;
