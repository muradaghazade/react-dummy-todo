import React from "react"



class Input extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="create a todo item" />
        <button>Submit</button>
      </div>
    );
  }
}