import React from "react";

const NumberInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="input-number">
      <input type="text" value={props.value} onChange={props.handleNumberChange}/>
      <input type="submit" value="Get People"/>
    </form>
  )
}

export {NumberInput};
