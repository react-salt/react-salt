import React from 'react';
import ReactDOM from 'react-dom';
import Cat from '../index.js';

let PageComponent = require('./pages/' + MYM.page);

ReactDOM.render(<PageComponent.default />, document.getElementById('app'));
