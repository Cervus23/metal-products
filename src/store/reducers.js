import { TOGGLE_LANG_SELECTOR, TOGGLE_SEARCH } from './actions'

const initialState = {
  activeLangSelector: false,
  touchedLang: false,
  activeSearch: false,
  touchedSearch: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LANG_SELECTOR:
      return {...state, activeLangSelector: !state.activeLangSelector, touchedLang: true};
    case TOGGLE_SEARCH:
      return {...state, activeSearch: !state.activeSearch, touchedSearch: true};
    default:
      return { ...state };
  }
};

export default reducer;
