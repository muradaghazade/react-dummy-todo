import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "rgb(250, 44, 66)",color: "white" , width: "250px", height: "150px", margin: "auto", paddingTop: "40px", display: "flex", borderRadius: "10px", textAlign: "center", maxWidth: "250px", marginBottom: "20px"}}>
        <input 
          type="checkbox" 
          checked={this.props.todo.completed}
          onChange={() => this.props.mummy(this.props.todo.id)} 
          
          />

          { this.props.todo.completed ? (
            <h1 style={{textDecoration: "line-through"}}>{this.props.todo.title}</h1>
          ):(
            <h1 style={{textDecoration: "none"}}>{this.props.todo.title}</h1>

          )}
          <button style={{height: "30px", border: "transparent", borderRadius: "5px", marginTop: "40px", marginRight: "3px"}} onClick={() => {this.props.delete_todo(this.props.todo.id)}}>Delete</button>
      </div>
    )
  }
}

export default TodoItem;