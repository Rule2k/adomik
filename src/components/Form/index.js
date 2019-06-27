import React from 'react';
import PropsTypes from 'prop-types';

import Dropdown from 'src/containers/Dropdown';
import Search from 'src/containers/Search';

import './form.scss';

const Form = ({ users, searchInput, dropdownValue, filteredUsersList, searchDone, fixedCity, fixedInput }) => {
  const getFilteredSearch = () => {
    console.log('getFilteredSearch');
    let currentList = [];
    let filteredList = [];
    let city = '';
    if (searchInput !== '') {
      city = dropdownValue;
      currentList = users;
      filteredList = currentList.filter((user) => {

        const villeLowerCase = user.ville.toLowerCase();
        const nomEtPrenomLowerCase = user.prenom.toLowerCase() + user.nom.toLowerCase();
        const searchInputFilter = searchInput.toLowerCase().replace(/\s/g, '');
        const dropdownValueFilter = dropdownValue.toLowerCase().replace(/\s/g, '');

        return (
          nomEtPrenomLowerCase.includes(searchInputFilter)) 
          && (villeLowerCase === dropdownValueFilter
          );
      });
    }
    else {
      filteredList = users;
    }
    return filteredList;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const usersList = getFilteredSearch();
    filteredUsersList(usersList);
    searchDone(true);
    fixedCity();
    fixedInput();
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      <Dropdown />
      <Search />
      <button id="button" type="submit">Submit</button>
    </form>
  );
}


export default Form;
