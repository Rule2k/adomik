
/**
 * Initial State
 */

const initialState = {
  users: [],
  components: [],
  searchInput: '',
  dropdownValue: '',
  filteredUsersList: [],
  searchDone: false,
  fixedCity: '',
  fixedInput: '',
};

/**
 * Types
 */
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_COMPONENTS = 'LOAD_COMPONENTS';
const USERS_RECEIVED = 'USERS_RECEIVED';
const COMPONENTS_RECEIVED = 'COMPONENTS_RECEIVED';
const INPUT_HAS_CHANGED = 'INPUT_HAS_CHANGED';
const DROPDOWN_VALUE_HAS_CHANGED = 'DROPDOWN_VALUE_HAS_CHANGED';
const FILTERED_USERS_LIST = 'FILTERED_USERS_LIST';
const SEARCH_DONE = 'SEARCH_DONE';
const FIXED_INPUT = 'FIXED_INPUT';
const FIXED_CITY = 'FIXED_CITY';
const RESET = 'RESET';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USERS_RECEIVED:
      return {
        ...state,
        users: action.users,
      };
    case COMPONENTS_RECEIVED:
      return {
        ...state,
        components: action.components,
      };
    case INPUT_HAS_CHANGED:
      return {
        ...state,
        searchInput: action.input,
      };
    case DROPDOWN_VALUE_HAS_CHANGED:
      return {
        ...state,
        dropdownValue: action.value,
      };
    case FILTERED_USERS_LIST:
      return {
        ...state,
        filteredUsersList: action.list,
      };
    case SEARCH_DONE:
      return {
        ...state,
        searchDone: action.bool,
      };
    case FIXED_CITY:
      return {
        ...state,
        fixedCity: state.dropdownValue,
      };
    case FIXED_INPUT:
      return {
        ...state,
        fixedInput: state.searchInput,
        searchInput: '',
      };
    case RESET:
      return {
        ...state,
        searchInput: '',
        dropdownValue: '',
        filteredUsersList: [],
        searchDone: false,
        fixedCity: '',
        fixedInput: '',
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const loadUsers = () => ({
  type: LOAD_USERS,
});

export const loadComponents = () => ({
  type: LOAD_COMPONENTS,
});

export const usersReceived = users => ({
  type: USERS_RECEIVED,
  users,
});

export const componentsReceived = components => ({
  type: COMPONENTS_RECEIVED,
  components,
});

export const inputChanged = input => ({
  type: INPUT_HAS_CHANGED,
  input,
});

export const dropdownValueHasChanged = value => ({
  type: DROPDOWN_VALUE_HAS_CHANGED,
  value,
});

export const filteredUsersList = list => ({
  type: FILTERED_USERS_LIST,
  list,
});

export const searchDone = bool => ({
  type: SEARCH_DONE,
  bool,
});

export const fixedCity = () => ({
  type: FIXED_CITY,
});

export const fixedInput = () => ({
  type: FIXED_INPUT,
});

export const reset = () => ({
  type: RESET,
});

export default reducer;
