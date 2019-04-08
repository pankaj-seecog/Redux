import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
let style = {
  color : 'green'
}
const Navigation = ()=>{
//   return (
//     <div>
// <NavLink to="/" exact activeClassName="navlink">Home</NavLink> | 
// <NavLink to="/contact" activeClassName="navlink">Contact</NavLink> |
// <NavLink to="/about" activeClassName="navlink">About</NavLink> | 
//     </div>
//   )

  return (
    <div>
<NavLink to="/" exact activeStyle={style}>Home</NavLink> | 
<NavLink to="/contact" activeStyle={style}>Contact</NavLink> |
<NavLink to="/about" activeStyle={style}>About</NavLink> | 
<NavLink to="/posts" activeStyle={style}>Posts</NavLink> | 
    </div>
  )

}

export default Navigation;