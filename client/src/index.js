import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
