import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from 'redux-chess';

const props = {
  host: '127.0.0.1',
  port: '8080'
};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);
