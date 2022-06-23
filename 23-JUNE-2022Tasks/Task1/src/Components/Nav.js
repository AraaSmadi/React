import { NavLink } from "react-router-dom";

function Nav (){
    return (
        <nav className="navbar navbar-expand-sm bg-dark">
      
          <li>
            <NavLink exact to="/" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} to="/about">
              About
            </NavLink>
          </li>
        
     
        </nav>
    )
}
export default Nav ;
