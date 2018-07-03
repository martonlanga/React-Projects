import React from 'react';
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';

const App = () => (
  <React.Fragment>
    <h1 className='heading-1'>todos</h1>
    <Header />
    <MainSection />
  </React.Fragment>
);

export default App;
