import React from 'react';
//import 
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'



export default function Sidebar () {

  return (
    <div className="Sidebar">
        <div className="nav">
          <nav className="navbar">
          <FontAwesomeIcon icon={faHippo} size="5x" className="hippo" />
            {SidebarData.map((item, index) => {

              return (
                <SubMenu item={item} key={index} />
              ) 
              
            })}
          </nav>
        </div>
    </div>
  );
};
