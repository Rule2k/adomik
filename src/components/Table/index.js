import React from 'react';
import PropsTypes from 'prop-types';
import './table.scss';

const Table = ({ users, searchInput, dropdownValue }) => {
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
      filteredList = users;
    }
    return filteredList;
  };
  return (
    <div id="main">
      {searchInput ? <p>{getFilteredSearch().length} résultat{getFilteredSearch().length > 1 ? 's' : null} pour {searchInput} à {dropdownValue}</p> : <p>Tapez une recherche</p> }
      <table id="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Ville</td>
            <td>Prénom</td>
            <td>Nom</td>
            <td>Right</td>
          </tr>
        </thead>
        <tbody>
          {
            getFilteredSearch().map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.ville}</td>
                <td>{user.prenom}</td>
                <td>{user.nom}</td>
                <td>{user.right}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
