import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

const Search = ({ searchInput, inputChanged }) => {
  // renvoie la nouvelle valeur d'input
  const inputHasChanged = event => (
    inputChanged(event.target.value)
  );
  return (
    <input id="input" value={searchInput} onChange={inputHasChanged} autoComplete="off" />
  );
};

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  inputChanged: PropTypes.func.isRequired,
};

export default Search;
