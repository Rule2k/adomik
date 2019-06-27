import React from 'react';
import PropsTypes from 'prop-types';

import Dropdown from 'src/containers/Dropdown';
import Search from 'src/containers/Search';

import './form.scss';

const Form = () => (
  <form id="form">
    <Dropdown />
    <Search />
    <button id="button" type="button">Submit</button>
  </form>
);


export default Form;
