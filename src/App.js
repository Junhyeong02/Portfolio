import React from 'react';
import Header from './components/Header';
import Side from './components/Side';
import Main from './components/Main';
import Footer from './components/Footer'

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Side />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
