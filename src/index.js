/**
 * import : npm
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
/**
 * import : local
 */
import store from 'src/store';
import App from 'src/containers/App';
import { loadUsers, loadComponents, loadCities } from 'src/store/reducer';

/**
 * Render - Rendu d'un composant React dans le DOM
 */

const rootComponent = <Provider store={store}><App /></Provider>;
const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);
store.dispatch(loadUsers());
store.dispatch(loadComponents());
