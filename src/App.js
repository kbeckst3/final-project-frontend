import React, { Component } from 'react';
import MainNavbar from './pages/main-layout/navbar/component'
import RoutesPage from './router/component'

class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar/>
        <RoutesPage/>
      </div>
    );
  }
}

export default App;
