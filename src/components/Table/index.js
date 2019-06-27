import React from 'react';
import PropsTypes from 'prop-types';

const Table = ({ users, searchInput, dropdownValue }) => {

  const getFilteredSearch = () => {
    let currentList = [];
    let filteredList = [];
    let city = '';
    if (searchInput !== '') {
      city = dropdownValue;
      currentList = users;
      filteredList = currentList.filter((user) => {
        const prenomLowerCase = user.prenom.toLowerCase();
        const nomLowerCase = user.nom.toLowerCase();
        const villeLowerCase = user.ville.toLowerCase();
        const searchInputFilter = searchInput.toLowerCase();
        const dropdownValueFilter = dropdownValue.toLowerCase();
        return (prenomLowerCase.includes(searchInputFilter) || nomLowerCase.includes(searchInputFilter)) && (villeLowerCase === dropdownValueFilter);
      });
    } else {
      filteredList = users;
    }
    return filteredList;
  };
  return (
    <div id="main">
      {searchInput ? <p>{getFilteredSearch().length} résultat{getFilteredSearch().length > 1 ? 's' : null} pour {searchInput} à {dropdownValue}</p> : null}
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
