import React from 'react';
import PropsTypes from 'prop-types';

import './dropdown.scss';

class Dropdown extends React.Component {
  componentDidUpdate() {
    const { dropdownValueHasChanged } = this.props;
    dropdownValueHasChanged(document.getElementById('dropdown').value);
  }

  render() {
    const { dropdownValueHasChanged, dropdownValue, city } = this.props;
    const handleNewValue = event => (
      dropdownValueHasChanged(event.target.value)
    );
    console.log(city);
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


export default Dropdown;
