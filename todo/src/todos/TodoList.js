import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';


const TodoList  = ({todos}) => (
  <div>
  <ListGroup>{todos.map(t => <ListGroupItem key={t.id}>{t.tarea}</ListGroupItem>)}
  </ListGroup>
</div>
)
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
