import './App.css';
import{useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //sidebar display toggler
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // dark and light mode toggler
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <div className={`app ${isDarkMode ? 'darkMain darkText' : 'whiteText bg-light'} min-vh-100`}>
      {/* sidebar */}
      <Sidebar 
          sidebarOpen = {sidebarOpen}
          isDarkMode = {isDarkMode}
          toggleSidebar = {toggleSidebar}
     />
          
      {/* navbar and main layout of content */}
      <div className={`${isDarkMode ? 'darkMain whiteText' : 'text-dark bg-light'} mainWrapper`}>
        {/* Nav Bar */}
        <Navbar 
           toggleSidebar = {toggleSidebar}
           toggleTheme = {toggleTheme}
           isDarkMode = {isDarkMode}
        />

        {/* main content */}
        <Main isDarkMode = {isDarkMode}/>
      </div>      
    </div>










  )
}

export default App
