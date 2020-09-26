import React from "react"
import TodoItem from './TodoItem';

class TodosList extends React.Component {

  render() {
    return (
      <div style={{display: "flex", flexWrap: "wrap", marginTop: "40px"}}>
        {this.props.todos.map(todo => {
          return <TodoItem 
            key={todo.id} 
            todo={todo}
            mummy = {this.props.dummy}
            max={this.props.maximum}
            delete_todo={this.props.delete}/>
            
            
        }
        )}
      </div>
    )
  }
}

export default TodosList