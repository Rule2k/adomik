/**
 * Initial State
 */
const initialState = {
  users: [],
  components: [],
};

/**
 * Types
 */
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_COMPONENTS = 'LOAD_COMPONENTS';
const USERS_RECEIVED = 'USERS_RECEIVED';
const COMPONENTS_RECEIVED = 'COMPONENTS_RECEIVED';

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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
