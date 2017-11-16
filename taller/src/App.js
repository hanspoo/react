import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {tarea: ''}
    this.tareaCambiada = this.tareaCambiada.bind(this)

  }

  tareaCambiada(evt) {
    console.log(evt.target.value)
    this.setState({ tarea: evt.target.value });
  }

  render() {

    const tareas = [
      { id: 1, tarea: 'Ver netflix' },
      { id: 2, tarea: 'Leer un libro' },
      { id: 3, tarea: 'Programar react' }
    ];

    const tareasVisibles = this.state.tarea ?
      tareas.filter(t => t.tarea.toLowerCase().indexOf(this.state.tarea) != -1 )
      : tareas;

    return (
      <div className="App">

        <input type="text" onChange={this.tareaCambiada} value={this.state.tarea} />

        <ul>

          {tareasVisibles.map(t => <li key={t.id}>{t.tarea}</li>)}
        </ul>

      </div>
    );
  }
}

export default App;
