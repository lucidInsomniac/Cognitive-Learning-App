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
                  <ul className="navbar-nav">

                    <FontAwesomeIcon 
                      icon={faHippo} 
                      size="5x" 
                      className="hippo" 
                    />

                      {/* Here we map the data from SidebarData into the component 
                      for Submenu, and return the Submenu Component with the Sidebar 
                      data included inside */}
                      {SidebarData.map((item, index) => {

                          return (
                            
                            // We want to return the SubMenu after the SidebarData has been added
                            <SubMenu item={item} key={index} />
                          
                          ) 
                          
                      })}

                  </ul>

              </nav>

          </div>

      </div>
  );

};
