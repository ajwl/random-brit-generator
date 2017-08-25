import React, { Component } from 'react';

class NumberInput extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getPeople = this.getPeople.bind(this);
  }

  handleChange(e){
    console.log("this fired correctly")
    this.props.handleNumberChange(e.target.value);
  }

  handleSubmit(e){
    this.props.getPeople()
    e.preventDefault();
  }

  getPeople(){
    this.props.getThosePeople();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="input-number">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Get People" />
      </form>
    )
  }

}

export default NumberInput;
