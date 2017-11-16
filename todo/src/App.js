import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todos/TodoList'
import SearchBar from './todos/SearchBar'

const todos = [
  { id:1, tarea: 'Comprar pan', listo: false },
  { id:2, tarea: 'Leer un clásico', listo: false },
  { id:3, tarea: 'Clase de Yoga', listo: false },
  { id:4, tarea: 'Preparar Pizza', listo: false },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { filter: '' }

  }


  doSearch(evt) {
    console.log(evt.target.value);
    this.setState({ filter: evt.target.value.toLowerCase() });
  }

  render() {

    const visibleTodos =
      this.state.filter ? todos.filter(t => t.tarea.toLowerCase().indexOf(this.state.filter) != -1) : todos;

    return (
      <div className="App">
        <h1>Todo List</h1>
        <SearchBar onSearch={this.doSearch.bind(this)}/>
        <TodoList todos={visibleTodos} />
      </div>
    );
  }
}

export default App;
