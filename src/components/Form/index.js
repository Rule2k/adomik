import React from 'react';
import PropsTypes from 'prop-types';

import Dropdown from 'src/components/Dropdown';
import Search from 'src/components/Search';

const Form = () => (
  <form id="form">
    <Dropdown />
    <Search />
  </form>
);


export default Form;
