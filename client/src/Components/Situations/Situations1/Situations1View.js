import React from 'react'
import Situations1DnD from './Situations1DnD'

const situationsData = [
    {
      title: "Group 1",
      items: ["1a", "2a", "3a", "4a"],
    },
  
    {
      title: "Group 2",
      items: ["1b", "2b", "3b", "4b"],
    },
  ];

export default function Situations1View () {

    return (

        <div className="SituationsView">
             <Situations1DnD situationsData={situationsData} />
        </div>
        
    )

}