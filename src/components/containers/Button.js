import React, {Component} from "react";
import ReactDOM from "react-dom";

class Button extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount: function(){
    window.getElementById('.wheel.').addEventListener('animationend', this.props.clearAnimation)
  }

  render(){
    return (
      <div className="buttons">
        <button onClick={this.props.rerunSpinner} id="startButton">Run the machine</button>
        <button onClick={this.props.clearAnimation}>Stop the machine</button>
      </div>
    )
  }
}


export default Button;
