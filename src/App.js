import React from 'react';
import './style/App.css';
import SearchCity from './SearchCity';
import './style/mobile.css'
const Logo = () => <h1 className="logo">Pogoda na świecie</h1>

class App extends React.Component {
  render () {
    return (
      <>
      <header>
      </header>
      <Logo></Logo>
      <SearchCity></SearchCity>
      </>
    )
  }
}

export default App;