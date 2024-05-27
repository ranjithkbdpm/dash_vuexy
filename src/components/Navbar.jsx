// import  { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBell } from '@fortawesome/free-regular-svg-icons';
import { faLanguage, faBorderAll, faSearch, faBars} from '@fortawesome/free-solid-svg-icons';
import image from '../assets/img/1.png';


const Navbar = ({isDarkMode, toggleTheme, toggleSidebar}) => {
  
  return (
    <>
      <nav className={`navbar navBar navbar-expand-sm sticky-top mb-4 rounded ${isDarkMode ? 'darkTheme navbar-dark' : 'navbar-light border bg-light'}`}>        
        
        <div className="d-flex w-100">
          {/* sidebar toggler button */}
          <button
            className={`sidebarToggler ms-2 me-1 btn`}  type="button" onClick={toggleSidebar}>
              <FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`} icon={faBars} />
          </button>

          {/* seach and nav buttons */}
          <div className={`${isDarkMode ? 'darkText' : 'whiteText'} searchBar ms-2`}>
            <div className={`input-group`}>
              <input  type="text" className={`form-control`} placeholder="Search" aria-label="Search"   aria-describedby="basic-addon2"/>
              <span className="input-group-text" id="basic-addon2">
                <FontAwesomeIcon icon={faSearch} />
              </span>
          </div>
          </div>
         

          {/* buttons */}
          <div className='me-2 ms-auto'>
            <ul className='nav align-items-center'>
              <i className="nav-item">
                <button className={`btn`}>            
                  <FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`} 
                  icon={faLanguage} /> 
                </button>
              </i>
              <i className="nav-item">
                <button  className={`btn`} onClick={toggleTheme}>            
                  {isDarkMode 
                    ?<FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`}  
                    icon={faSun}/> 
                    :<FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`} 
                    icon={faMoon}/>}
                </button>
              </i>
              <i className="nav-item">
                <button className={`btn`}>            
                  <FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`} 
                  icon={faBorderAll} />
                </button>
              </i>
              <i className="nav-item">
                <button className={`btn`}>            
                  <FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`} 
                  icon={faBell} />
                </button>
              </i>
              <i className="nav-item">
                <button className={`btn`}>            
                  <div className='avatarLogo'>
                    <img src={image} className='avatarLogo' alt="avatar" />
                  </div>
                </button>
              </i>
            </ul> 
          </div>
                   
        </div>
      </nav>
    </>
  );
};

export default Navbar;
