import React from 'react'
import './App.css'

const Header = (props) => {
  if (props.nav) {
    return (
      <header>
      
        <ul>
          <li onClick={(e) => props.click(e)} id="All" 
            className="nav-item active">All</li>

          {props.nav.map(nav => 
            <li 
              onClick={(e) => props.click(e)} 
              id={nav} className="nav-item"
              key={nav}>{nav}
            </li>)}

        </ul>

      </header>
    )
  }else{
    return <div></div>
  }
}

export default Header;
