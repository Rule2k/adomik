import React from 'react';
import PropsTypes from 'prop-types';
import './table.scss';

// searchDone est un bool issu du store de redux qui permet de savoir si une première recherche
// a été faite par l'utilisateur
// si ce n'est pas le cas, un message nous invitant à taper une recherche s'affiche
// sinon, c'est le message qui affiche la recherche de l'utilisateur
// ainsi que le nombre de résultat

// si filteredList est vide, nous n'affichons aucun résultat
// sinon un mapping de la liste des résultat les affiche

const Table = ({ filteredList, searchDone, fixedCity, fixedInput }) => (
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
        { filteredList
          ? filteredList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.ville}</td>
              <td>{user.prenom}</td>
              <td>{user.nom}</td>
              <td>{user.right}</td>
            </tr>
          ))
          : null
        }
      </tbody>
    </table>
  </div>
);


export default Table;
