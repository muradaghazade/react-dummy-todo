import React from "react"



class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }

  changeData = (data) => {
    console.log(data);
    this.setState({data: data});
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.data} 
          placeholder= "create a todo item"
          onChange = {(e) => this.changeData(e.target.value)}
        />
        <button onClick={()=>{this.props.append()}}>Submit</button>
      </div>
    );
  }
}

export default Input;