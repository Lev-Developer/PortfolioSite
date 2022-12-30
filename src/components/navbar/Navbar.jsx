import { BtnDarkMode } from "../btnDarkMode/BtnDarkMode"
import "./style.css"
import {NavLink} from 'react-router-dom'


export function NavBar () {


  const actineLink = "nav-list__link--active nav-list__link "
  const normalLink = " nav-list__link "


  return(


    <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/"  className="logo">
            <strong>My site</strong> portfolio

            </NavLink>

            <BtnDarkMode />

            <ul className="nav-list">
                <li className="nav-list__item">
                  <NavLink to="/"  className={({isActive}) => isActive ? actineLink : normalLink
                  }>Home</NavLink>
            </li>
                <li className="nav-list__item">
                  <NavLink to="/projects" className={({isActive}) => isActive ? actineLink : normalLink
                  } >Projects</NavLink>
            </li>
                <li className="nav-list__item">
                  <NavLink to="/contacts" className={({isActive}) => isActive ? actineLink : normalLink
                  } >Contacts</NavLink>
            </li>
            </ul>
          </div>
        </div>
      </nav>
)
}