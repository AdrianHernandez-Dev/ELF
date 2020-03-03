import React, { Component } from 'react';
import FEATURES from './index';
import MainForm from './MainForm'
import MainSummary from './MainSummary'
import slugify from 'slugify';

import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(){
    super()
    this.state = {
      features: FEATURES,
      selected: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.total = this.total.bind(this)
  }


  handleClick( name, cost, title) {
    const selected = Object.assign({}, this.state.selected);
    selected[title] = [name, cost]

    this.setState({
        selected
    });

    this.total()
}

total = () => {
    let sum = 0
    Object.keys(this.state.selected).forEach(key => {
        sum += this.state.selected[key][1]
    })
    return sum;
}

    render () { 
      return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
          <h2>Customize your laptop</h2>
        </header>
        <main>
          <MainForm
            features={this.state.features}
            selected={this.state.selected}
            onClick={this.handleClick}
          />
          <MainSummary
            selected={this.state.selected}
            total={this.total()}
          />
        </main>
      </div>
    );
  }
}

export default App;
