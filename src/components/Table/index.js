import React from 'react';
import PropsTypes from 'prop-types';
import './table.scss';

const Table = ({ searchInput, dropdownValue, filteredList, searchDone, fixedCity, fixedInput }) => {
  return (
    <div id="main">
      {searchDone ? <p>{filteredList.length} résultat{filteredList.length > 1 ? 's' : null} pour {fixedInput} à {fixedCity}</p> : <p>Tapez une recherche</p> }
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
          { filteredList.map(user => (
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
