import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../containers/Form';
import Dropdown from '../../containers/Dropdown';
import Search from '../../containers/Search';
import Table from '../../containers/Table';
import Box from '../Box';

const GenerateComponent = ({ component }) => {
  const listOfComponents = {
    subproduct: Box,
    product: Box,
    form: Form,
    dropdown: Dropdown,
    search: Search,
    table: Table,
  };

  const Component = listOfComponents[component.component_identifier];

  return (
    <Component components={component}>
      {component.children && (
      <ParsingJson
        components={component.children}
        key={component.component_identifier}
      />
      )}
    </Component>
  );
};

GenerateComponent.propTypes = {
  component: PropTypes.object.isRequired,
};

const ParsingJson = ({ components }) => (
  components.map(component => (
    <GenerateComponent
      component={component}
      key={component.component_identifier}
    />
  ))
);

ParsingJson.propTypes = {
  components: PropTypes.array.isRequired,
};

export default ParsingJson;
