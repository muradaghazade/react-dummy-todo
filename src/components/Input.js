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
          style={{border: "none", background: "#e6e6e6", height: "25px", width: "200px", borderRadius: "5px", paddingLeft: "10px"}}
        />
        <button style={{marginLeft: "10px", border: "none", background: "#e6e6e6", height: "25px", borderRadius: "5px"}} onClick={()=>{this.props.append(this.state.data)}}>Submit</button>
      </div>
    );
  }
}

export default Input;