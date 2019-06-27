import store from 'src/store';

/**
 * Initial State
 */
const initialState = {
  users: [],
  components: [],
  searchInput: '',
  dropdownValue: '',
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

export default reducer;
