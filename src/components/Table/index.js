import React from 'react';
import PropTypes from 'prop-types';
import './table.scss';

// searchDone est un bool issu du store de redux qui permet de savoir si une première recherche
// a été faite par l'utilisateur
// si ce n'est pas le cas, un message nous invitant à taper une recherche s'affiche
// sinon, c'est le message qui affiche la recherche de l'utilisateur
// ainsi que le nombre de résultat

// si filteredList est vide, nous n'affichons aucun résultat
// sinon un mapping de la liste des résultat les affiche
// au lancement de l'application, tous les résultat sont affichés

const Table = ({ users, filteredList, searchDone, fixedCity, fixedInput }) => (
  <div id="main">
    {searchDone && filteredList ? <p>{filteredList.length} résultat{(filteredList.length > 1 ? 's' : null)} pour {fixedInput} à {fixedCity}</p> : <p>Tapez une recherche</p> }
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
        { filteredList.length > 0 || searchDone
          ? filteredList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.ville}</td>
              <td>{user.prenom}</td>
              <td>{user.nom}</td>
              <td>{user.right}</td>
            </tr>
          ))
          : users.map(user => (
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

Table.propTypes = {
  fixedCity: PropTypes.string.isRequired,
  fixedInput: PropTypes.string.isRequired,
  searchDone: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ville: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  })).isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ville: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  })).isRequired,
};


export default Table;
