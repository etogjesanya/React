import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import EmployeeGrid from './components/EmployeeGrid';

class App extends React.Component {
  render() {
    return (
      <>
        <MyNav/>
        <EmployeeGrid/>
      </>
    );
  }
}

export default App;
