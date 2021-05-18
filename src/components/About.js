import React from 'react'
import {Container, Button, InputGroup, FormControl} from 'react-bootstrap'

const About = () => {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [todoEditing, setTodoEditing] = React.useState("");
  const [editingText, setEditingText] = React.useState("");

  const finalsubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  const deleteList = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const editSubmission = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div className ="bg">
    <Container>
    <div id="todo-list">
      <h3>Todo List</h3>

      <form onSubmit={finalsubmit}>
      <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="primary" type="submit">Add</Button>
          </InputGroup.Prepend>
        <FormControl aria-describedby="basic-addon1" type="text" placeholder="Enter Text" onChange={(event) => setTodo(event.target.value)}
          value={todo}/>
        </InputGroup>
      </form>

      {todos.map((todo) => (
        <div key={todo.id}>
          
          <div>
            
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(event) => setEditingText(event.target.value)}
              />
            ) : (
              <div>
            <table border="1">
              {/* <thead> */}
                  <tr>
                    <th><li>{ todo.text }</li></th>
                  </tr>
              {/* </thead> */}
          </table>
          </div>

              // <div>{todo.text}</div>
            )}
          </div>
          
          <div>
            {todo.id === todoEditing ? (
              <Button variant="secondary" size="sm" onClick={() => editSubmission(todo.id)}>Edit</Button>
            ) : (
              <Button variant="secondary" size="sm" onClick={() => setTodoEditing(todo.id)}>Edit</Button>
            )}

            <Button variant="danger" size="sm" onClick={() => deleteList(todo.id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
    </Container>
    </div>
  );
};


export default About