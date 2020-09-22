import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <input 
          type="checkbox" 
          checked={this.props.todo.completed}
          onChange={() => console.log("click event")} 
        />
        <li>{this.props.todo.title}</li>
      </div>
    )
  }
}

export default TodoItem;