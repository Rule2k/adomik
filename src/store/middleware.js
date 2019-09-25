import axios from 'axios';
import {
  LOAD_COMPONENTS, LOAD_USERS, LOAD_CITIES, usersReceived, componentsReceived, citiesReceived,
} from './reducer';

const url = 'http://localhost:3000/api';

// middleware. Ces actions n'arrivent pas directement jusqu'au reducer mais sont destinés à l'API

const Middleware = store => next => (action) => {
  switch (action.type) {
    // charge la liste des users et la dispatch dans le reducer
    case LOAD_USERS:
      axios.get(`${url}/users`, {
      })
        .then((result) => {
          store.dispatch(usersReceived(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    // charge la liste des composants et la dispatch dans le reducer
    case LOAD_COMPONENTS:
      axios.get(`${url}/components`, {
      })
        .then((result) => {
          store.dispatch(componentsReceived(result.data.components));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default Middleware;
