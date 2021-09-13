import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from '@chesslab/redux-chess';

const props = {
  server: {
    prot: 'ws',
    host: '127.0.0.1',
    port: '8080'
  }
};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);
