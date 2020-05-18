import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Lion from './Lion';
import Bangalore from './Bangalore';
class App extends Component {
  
  render() {
    return (
      <div>
      
<hr/>
<Bangalore />
     
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
