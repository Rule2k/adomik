import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({
  users, searchInput, dropdownValue, filteredUsersList, searchDone, fixedCity, fixedInput, children, components
}) => {
  // fonction permettant de trier la liste des utilisateurs
  // en fonction de la recherche et de la valeur du dropdown
  // ne renvoie rien si aucun résultat
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
    return filteredList;
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
    if (searchInput) {
      fixedCity();
      fixedInput();
      searchDone(true);
    }
  };
  return (
    <form id="form" onSubmit={handleSubmit}>
      { children }
      <button id="button" type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  dropdownValue: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  fixedCity: PropTypes.func.isRequired,
  fixedInput: PropTypes.func.isRequired,
  filteredUsersList: PropTypes.func.isRequired,
  searchDone: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ville: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  })).isRequired,
  children: PropTypes.object.isRequired,
};


export default Form;
