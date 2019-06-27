import React from 'react';
import PropsTypes from 'prop-types';

const Table = ({ users }) => (
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
        users.map(user => (
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

);


export default Table;
