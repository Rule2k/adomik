import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

class Dropdown extends React.Component {
  // permet d'envoyer dans le store de redux la valeur du premier item du dropdown
  // (sinon il serait vide par défaut et cela causerait des bugs dans l'application)
  componentDidUpdate() {
    const { dropdownValueHasChanged } = this.props;
    dropdownValueHasChanged(document.getElementById('dropdown').value);
  }

  render() {
    const { dropdownValueHasChanged, dropdownValue, city } = this.props;
    // permet de mettre à jour la valeur de l'item du dropdown dans le store de redux
    const handleNewValue = event => (
      dropdownValueHasChanged(event.target.value)
    );
    // génère la liste du dropdown, issu du store de redux
    return (
      <select id="dropdown" onChange={handleNewValue} value={dropdownValue}>
        <option value="Choisissez une ville" disabled>Choisissez une ville</option>
        {
          city.map(singleCity => (
            <option key={singleCity.id} value={singleCity.id}>{singleCity.label}</option>
          ))
        }
      </select>
    );
  }
}

Dropdown.propTypes = {
  dropdownValueHasChanged: PropTypes.func.isRequired,
  dropdownValue: PropTypes.string.isRequired,
  city: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};


export default Dropdown;
