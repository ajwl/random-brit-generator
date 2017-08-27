import React, {Component} from 'react';
import {getPeople} from '../lib/generator.js';

class NumberInput extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <form onSubmit={this.props.onSubmit} className="input-number">
        <input className="people-input" type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          onClick={this.props.onClick} />
        <input type="submit" value="Get People"/>
      </form>
    )
  }
};

NumberInput.propTypes = {
    value: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
};

export default NumberInput;
