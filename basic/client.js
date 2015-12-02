import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './hello-message.jsx';
ReactDOM.render(
  <HelloMessage name="John" />,
  document.querySelector("#content")
);
