// import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX,faHouse,faArrowsUpToLine, faCartShopping, faBookOpen,faTruck, faFileInvoiceDollar,faUserGroup, faGear, faLock,faRug, faBorderNone, faIcons, faToggleOff, faLayerGroup, faArrowRightFromBracket, faTableList, faDatabase, faChartPie, faLifeRing, faFileContract, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { faCopy, faEnvelope,faComments,faCalendar, faFileLines, faKeyboard, faSquare, faAddressCard, faSquareCheck, faMap} from '@fortawesome/free-regular-svg-icons';

const Sidebar = ({isDarkMode, sidebarOpen, toggleSidebar}) => {
    return (
    <div className={`sidebar overflow-auto p-3 ${sidebarOpen ? 'sidebarClose' : 'sidebarOpen'} 
     ${isDarkMode ? ' darkTheme' : 'text-dark border bg-light'}`}>
    {/* Dash logo and toggle button */}
    <div className = 'Dashlogo d-flex justify-content-between'>
      <h3>Vuexy</h3>
       <button  className={`sidebarToggler ms-auto me-1 btn`}  type="button" onClick={toggleSidebar}>
            <FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`} icon={faX} />
      </button>
    </div>
         
      <ul className={`nav flex-column`}>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faHouse} /> <span className="ms-1">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faTableColumns} /> 
            <span className="ms-1">Layout</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon className={`${isDarkMode ? 'darkText' : 'whiteText'}`}
            icon={faCopy} /> <span className="ms-1">FrontPage</span> 
          </a>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'} mt-1 text-uppercase`} href="#">
            Apps&Pages            
          </span>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faEnvelope} /> <span className="ms-1">Email</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faComments} /> <span className="ms-1">Chat</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faCalendar} /> <span className="ms-1">Calender</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faArrowsUpToLine} /> <span className="ms-1">kanban</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faCartShopping} /> <span className="ms-1">eCommerce</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faBookOpen} /> <span className="ms-1">Academy</span>  
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faTruck} /> <span className="ms-1">Logistics</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faFileInvoiceDollar} /> <span className="ms-1">Invoice</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faUserGroup} /> <span className="ms-1">Users</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faGear} /> <span className="ms-1">Roles and Permissions</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faFileLines} /> <span className="ms-1"> Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faLock} /> <span className="ms-1">Authentication</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faKeyboard} /> <span className="ms-1">wizard Examples</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faSquare} /> <span className="ms-1">Modal Expansion</span> 
          </a>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'} mt-1 text-uppercase`} href="#">
              Components            
          </span>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faAddressCard} /> <span className="ms-1"> Cards</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faRug} /> <span className="ms-1">User Interface</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faBorderNone} /> <span className="ms-1">Extended UI</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faIcons} /> <span className="ms-1">Extended UI</span> 
          </a>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}  mt-1 text-uppercase`} href="#">
            Forms and Tables            
          </span>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faToggleOff} /> <span className="ms-1">Form Element</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faLayerGroup} /> <span className="ms-1">Form Layout</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> <span className="ms-1">Form Wizard</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faSquareCheck} /> <span className="ms-1">Form Validations</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faTableList} /> <span className="ms-1">Tables</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faDatabase} /> <span className="ms-1">Datatables</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faTableList} /> <span className="ms-1">Contact</span> 
          </a>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'} mt-1 text-uppercase`} href="#">
            Charts and Maps            
          </span>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faChartPie} /> <span className="ms-1">Charts</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faMap} /> <span className="ms-1">Leaflet Maps</span> 
          </a>
        </li>
        <li className="nav-item">
          <span className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'} mt-1 text-uppercase`} href="#">
            Misc           
          </span>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faLifeRing} /> <span className="ms-1">Support</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faFileContract} /> <span className="ms-1">Contact</span> 
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${isDarkMode ? 'darkText' : 'text-secondary'}`} href="#">
            <FontAwesomeIcon icon={faX} /><span className="ms-1">Documentation</span>
          </a>
        </li>
      </ul>
    </div>
  )};

  // ${sidebarOpen ? 'closeSidebar' : 'openSidebar'} 

export default Sidebar