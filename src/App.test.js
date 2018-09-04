import React from 'react';
import ReactDOM from 'react-dom';
import mockAxios from 'axios'
import App from './App';

it('app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
