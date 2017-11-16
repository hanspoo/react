import React, { Component } from 'react';
import './App.css';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = { counter: 0 }
  }

  increment = (props) => {
    this.setState( { counter: this.state.counter + 1 } ) ;
  }

  decrement = (props) => {
    this.setState( { counter: this.state.counter - 1 } ) ;
  }

  render() {
    return (
      <div className="App">
        <Card>
          <Card.Content>
              <h1>Contador</h1>
              <h2>{this.state.counter}</h2>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button onClick={this.decrement.bind(this)} basic color='green'><Icon name="minus" /></Button>
              <Button onClick={this.increment.bind(this)} basic color='red'><Icon name="plus" /></Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
