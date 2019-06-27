import React from 'react';
import PropsTypes from 'prop-types';

import Dropdown from 'src/components/Dropdown';
import Search from 'src/containers/Search';

const Form = () => (
  <form id="form">
    <Dropdown />
    <Search />
    <button type="button">Submit</button>
  </form>
);


export default Form;
