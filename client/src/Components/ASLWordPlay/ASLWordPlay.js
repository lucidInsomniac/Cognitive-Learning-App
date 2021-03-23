import React from 'react';
import './ASLWordPlay.css'
import ASLWordPlayDnD from './ASLWordPlayDnD'


const data =[
  {title: 'group 1', items: ['1','2', '3']},
  {title: 'group 2', items: ['4','5', '6']}
]

export default function ASLWordPlay () {

  return (
    <div className="ASLWordPlay">
      <header className="ASLWordPlay-header">

        <ASLWordPlayDnD data={data} />

      </header>
    </div>
  );
}
