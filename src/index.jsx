import React from 'react';
import ReactDOM from 'react-dom';

import './saas/styles';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';


window.addEventListener('load', () => {
  ReactDOM.render(
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>,
    document.getElementById('root')
  );
});
