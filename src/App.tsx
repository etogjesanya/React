import React from 'react';
import './App.css';
import MyNav from './components/MyNav';
import EmployeeTable from './components/EmployeeTable';

class App extends React.Component {
  render() {
    return (
      <>
        <MyNav/>
        <EmployeeTable/>
      </>
    );
  }
}

export default App;
