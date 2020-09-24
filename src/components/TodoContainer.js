import React from "react"
import TodoList from './TodoList';
import Input from './Input';
class TodoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     todos: [
       {
         id: 1,
         title: "make todo container",
         completed: true
       },
       {
         id: 2,
         title: "create redux middleware",
         completed: false
       },
       {
         id: 3,
         title: "make production build",
         completed: false
       }
     ]
    };    
  }


  addTodo = (todo_title) => {
    
    let new_todos = [...this.state.todos]
    let max_id = new_todos.length+1
    let todo =  {"id": max_id, "title": todo_title, "completed": false}
    new_todos.push(todo)
    this.setState({todos: new_todos});
  }

  toggle = (id) => {
    let new_todos = this.state.todos.map(todo => { 
      if (todo.id === id) { 
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: new_todos});    
  }


  render() {
    return (
      <div className="App" style={{textAlign:"center", paddingTop: "20px"}}>
        <Input append={this.addTodo} /> 
        <TodoList 
          todos={this.state.todos} 
          dummy={this.toggle}
        />
      </div>
    )
  }
}
export default TodoContainer