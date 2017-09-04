import React, {Component} from 'react';

class NumberInput extends Component {

  constructor(props){
    super(props);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(e) {
    e.target.value = '';
  }

  render(){
    return (
      <form onSubmit={this.props.onSubmit} className="input-number">
        <label> How many people do you want to generate? </label>
        <input className="people-input" type="number"
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.handleClear} />
        <input type="submit" value="Get People"/>
      </form>
    )
  }
};

export default NumberInput;
