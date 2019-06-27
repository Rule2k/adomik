import React from 'react';
import PropsTypes from 'prop-types';


class Dropdown extends React.Component {
  componentDidMount() {
    const { dropdownValueHasChanged } = this.props;
    dropdownValueHasChanged(document.getElementById('dropdown').value);
  }

  render() {
    const { dropdownValueHasChanged, dropdownValue } = this.props;
    const handleNewValue = event => (
      dropdownValueHasChanged(event.target.value)
    );
    return (
      <select id="dropdown" onChange={handleNewValue} value={dropdownValue}>
        <option value="Choisissez une ville" disabled>Choisissez une ville</option>
        <option value="Paris">Paris</option>
        <option value="Marseille">Marseille</option>
      </select>
    );
  }
}


export default Dropdown;
