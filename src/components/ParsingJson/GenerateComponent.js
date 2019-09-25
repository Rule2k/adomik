import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../containers/Form';
import Dropdown from '../../containers/Dropdown';
import Search from '../../containers/Search';
import Table from '../../containers/Table';
import Box from '../Box';

const GenerateComponent = ({ component, children }) => {
  const listOfComponents = {
    form: Form,
    dropdown: Dropdown,
    search: Search,
    table: Table,
  };

  const Component = listOfComponents[component.component_identifier] || null;

  return (
    <Component props={component} /> || children
  );
};

GenerateComponent.propTypes = {
  component: PropTypes.object.isRequired,
};

export default GenerateComponent;
