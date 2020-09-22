import React from "react"
import TodoList from './TodoList';

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

  handleChange = () => {
    console.log("change event");
  }


  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange} 
        />
      </div>
    )
  }
}
export default TodoContainer