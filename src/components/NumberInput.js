import React, {Component} from 'react';
import {getPeople} from '../lib/generator.js';

class NumberInput extends Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log("HELP", this.props);
    return (
      <form onSubmit={this.props.onSubmit} className="input-number">
        <input type="text" value={this.props.value} onChange={this.props.onChange} />
        <input type="submit" value="Get People"/>
      </form>
    )
  }
};

NumberInput.propTypes = {
    value: React.PropTypes.number,
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
};

export default NumberInput;
