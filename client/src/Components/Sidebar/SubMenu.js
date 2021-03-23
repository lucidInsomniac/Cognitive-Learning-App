//This is the component for the dropdown submenu items. It also displays the entire array of main menu items
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css'



const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="SubMenu">
      <Link to={item.path} className="sidebar-link" onClick={item.subNav && showSubnav}>
       
        <div className="sidebar-icon">
          {item.icon}
        </div>

        <span id="submenu" className="tex-secondary">{item.title}</span>
        
        <div className="subnav">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>

      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} className="dropdown-link" key={index}>
              <div className="nav-icon">
                {item.icon}
              </div>

              <span className="dropdown-link">{item.title}</span>
              
            </Link>
          );
        })}
    </div>
  );
};

export default SubMenu;