import React from 'react';

const Menu = () => {
  return(
    <nav className="menu">
      <ul>
        <li className="generator"><a href="/">Generator</a></li>
        <li className="fruitmachine"><a href="/machine">Fruitmachine</a></li>
        <li className="info"><a href="/info">Infomation</a></li>
      </ul>
    </nav>
  )
}

export {Menu};
