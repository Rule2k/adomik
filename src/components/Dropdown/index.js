import React from 'react';
import PropsTypes from 'prop-types';

const Dropdown = ({ dropdownValueHasChanged, dropdownValue }) => {
  const handleNewValue = event => (
    dropdownValueHasChanged(event.target.value)
  );
  return (
    <select id="dropdown" onChange={handleNewValue} value={dropdownValue}>
      <option value="Choisissez une ville">Choisissez une ville</option>
      <option value="Paris">Paris</option>
      <option value="Marseille">Marseille</option>
    </select>
  );
};

export default Dropdown;
