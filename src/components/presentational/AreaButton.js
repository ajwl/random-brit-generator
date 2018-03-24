import React from "react"

const AreaButton = (props) => {
  return (
    <div className="geoButtons">
      <button className={props.isLondon ? '': 'selected'} id="london" onClick={props.getArea}>London</button>
      <button className={props.isLondon ? 'selected': ''} id="englandWales" onClick={props.getArea}>England & Wales</button>
    </div>
  )
};

export {AreaButton};
