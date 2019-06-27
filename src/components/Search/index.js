import React from 'react';
import PropsTypes from 'prop-types';

const Search = ({ searchInput, inputChanged }) => {
  const inputHasChanged = event => (
    inputChanged(event.target.value)
  );
  return (
    <input id="input" value={searchInput} onChange={inputHasChanged} />
  );
};


export default Search;
