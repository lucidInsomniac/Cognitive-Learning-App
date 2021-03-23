import React, { useState, useRef } from 'react'
//useRef stays const during re-rendering

export default function ASLWordPlayDnD ({ data }) {

    const [list, setList] = useState(data);

    //create state for dragging
    const [dragging, setDragging] = useState(false);

    //keeps numbers constant
    const dragItem = useRef();

    //
    const dragNode = useRef();

    //event handler to listen to "draggable" event trigger onDragStart
    function handleDragStart (e, params) {
        //check to make sure this is triggered 
        console.log("Drag starting...", params)
        //div should be:  <div draggable onDragStart={handleDragStart} key={item} className="dnd-item">
        
        //set dragItem to params so numbers won't change and change state to true
        dragItem.current = params;
        //Once draggable item is completed, this event triggers the eventhandler handleDragEnd to reset
        dragNode.current = e.target;
        dragNode.current.addEventListener("dragend", handleDragEnd)
         //set Drag time to time out like async
         setTimeout(() => {
             //sets ghost affect on card but background is visible
            setDragging(true);
         }, 0)
        
          //need to reset to allow next drag once drag ends
        //so we need to create another uesrRef to reference to this node

    }

    //event handler  passes event and params to allow cards to be dragged and placed in different position
    function handleDragEnter (e, params) {
        //if start drag, all items need to add event listener
        //check to see if it enters into new position for card
        //it will auto trigger when clicked but will trigger again 
        //when overlap another location = good thing, but to see which one, set grpI, itemI for onDragEnter
        console.log('Entering drag...', params)

        //set init state for old list
        const currentItem = dragItem.current;
        
        //check that Enter drag is not the same as Start Drag, use as ref dragNode.current = e.target;
        if (e.target !== dragNode.current) {
            //check, if true, we can do something with this, like set new position
            console.log('TARGET NOT THE SAME')
            //set new position by copying and creating new List
            setList(oldList => {
                //this allows for a deep copy of obj vs [...state] only creates shallow copy
                let newList = JSON.parse(JSON.stringify(oldList));
                //now we can modify new List to target the position we want, not init position
                //splice allows modification, target 1 item, not removing, swap with init item ==> newList of currentItem, at index, remove item, and return list 
                newList[params.grpI].items.splice(params.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0])
                
                //set current to new position on newList
                dragItem.current = params

                //return new modified list
                return newList
            })
        }
    }

    //event handler triggered by drag ending, reset all methods from handDragStart
    function handleDragEnd(){
        //check to see if end of drag is triggered
        console.log('Ending drag...')
        
         //reset to initial state FIRST
         setDragging(false);
         //remove eventListener SECOND, then reset everything else
         dragNode.current.removeEventListener("dragend", handleDragEnd);
          //set dragItem to null to reset
          dragItem.current = null;
          //Once draggable item is completed, this event triggers the eventhandler handleDragEnd to reset
          dragNode.current = null;
    }

    //getStyles function, target using params as arg
    function getStyles(params) {
        //set conditions for selected card to be dragged
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return 'current dnd-item'
        }

        //indicator to style card differently in item
        //this applies to all cards when dragged, we want only selected
        //so we pass {grpI, itemI} in className for getStyles to target specific card
        return 'dnd-item'
    }

    return (

      <div className="drag-n-drop">

          {
            list.map((grp, grpI) => (
              <div key={grp.title} className="dnd-group">
                 <div 
                    className="group-title"
                    //if dragging and item has value of 0, allows init drag item to return and set to init position
                    onDragEnter={ dragging && !grp.items.length? (e) => handleDragEnter(e, {grpI, itemI: 0}) :null }
                >
                    {grp.title}
                </div>

                { 
                  grp.items.map((item, itemI) => (

                    <div 
                    // "draggable" allows you to ghost drag item
                        draggable 
                        // onDragStart creates evenet that triggers event handler to set drag onto the grouped item selected, like coordinates
                        onDragStart={(e) => (handleDragStart(e, {grpI, itemI}))} 
                        //If dragging is true, allow current card to trigger handleDragEnter, else nothing
                        onDragEnter={ (e) => dragging ? handleDragEnter(e, {grpI, itemI}) : null }
                        key={item} 
                        // create ternary condition rendering, if dragging is true
                        //If we are dragging, only item inside getStyles() affected, else stays as init state on as "dnd-item"
                        className={ dragging ? getStyles({grpI, itemI}) :  "dnd-item" }
                    >
                        {item}
                    </div>
                  ))
                }

              </div>
            ))
          }
        </div>

    )
}