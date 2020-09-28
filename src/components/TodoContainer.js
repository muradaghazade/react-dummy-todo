import React from "react"
import TodoList from './TodoList';
import Input from './Input';
class TodoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      next_id : 4,
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

  componentDidMount = () => {
    let url = "http://127.0.0.1:5000/api/v1/todos";
    fetch(url).
      then(resp => resp.json()).then(data => {
        
        this.setState({todos: data['todos']}, 
          () => { this.setState({next_id: data['next_id']}) }
        );
    }
    ).catch(e => console.error("Error"));
  }


  addTodo = (todo_title) => {
    
      let todo =  {"title": todo_title, "completed": false}
      let new_todos = [...this.state.todos, todo]
    let url = "http://127.0.0.1:5000/api/v1/todos";
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(todo)
    }).
    then(resp => resp.json()).then(data => {
      let new_todos = [...this.state.todos, data]
      this.setState({todos: new_todos}, () => { this.setState({next_id: this.state.next_id+1}) });
  }).catch(e => console.error("Error"));
  }

  deleteTodo = (id) => {
    // let new_todos = this.state.todos.filter(todo => todo.id != id)
    let idd = {'id': id}
    let url = "http://127.0.0.1:5000/api/v1/todos";
    fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(idd)
    }).
    then(resp => resp.json()).then(data => {
      this.setState({todos: data})
  }).catch(e => console.error("Error"));
  }

  toggle = (id) => {

    let idd = {'id': id}
    let url = "http://127.0.0.1:5000/api/v1/todos";
    let new_todos = this.state.todos.map(todo => { 
      if (todo.id === id) { 
        todo.completed = !todo.completed;
      }
      return todo;
    });

    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(idd)
    }).
    then(resp => resp.json()).then(data => {
      console.log(data)
      this.setState({todos: new_todos});
  }).catch(e => console.error("Error"));    
  }


  render() {
    return (
      <div className="App" style={{textAlign:"center", paddingTop: "20px"}}>
        <Input append={this.addTodo} /> 
        <TodoList 
          todos={this.state.todos} 
          dummy={this.toggle}
          delete={this.deleteTodo}
        />
      </div>
    )
  }
}
export default TodoContainer