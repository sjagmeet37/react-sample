import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

let model = {
  clicks : 0
};

function renders() {
  ReactDOM.render( <
    React.StrictMode >
    <
    AuthorQuiz clicks = {
      model.clicks
    }
    onTextClicked = {
      () => {
        model.clicks += 1;
        renders();
      }
    }
    /> </React.StrictMode>,
    document.getElementById('root')
  );};

renders();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();