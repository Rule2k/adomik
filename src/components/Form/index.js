import React from 'react';
import PropsTypes from 'prop-types';

import Dropdown from 'src/containers/Dropdown';
import Search from 'src/containers/Search';

import './form.scss';

const Form = ({ users, searchInput, dropdownValue, filteredUsersList, searchDone, fixedCity, fixedInput }) => {

  // fonction permettant de trier la liste des utilisateurs
  // en fonction de la recherche et de la valeur du dropdown
  // renvoie un tableau vide s'il n'y a aucun résultat

  const getFilteredSearch = () => {
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
      return filteredList;
    }
  };

  // preventdefault pour stopper le rechargement de la page
  // filterUserList pour envoyer la liste filtrée des résultats dans redux
  // fixedInput pour avoir une valeur fixe d'input dans le store de redux
  // (sinon celle ci change à chaque input)
  // fixedCity les mêmes raisons

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
