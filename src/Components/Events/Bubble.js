import React from 'react'

const Bubble = () => {
    const ParentClick = (event) => {
        alert("Parent Clicked");
    }
    const ChildClick = (event) => {
        alert("Child Clicked");
    };
    const Child2Click = (event) => {
        alert("Child 2 Clicked");
        event.stopPropagation(); //Stop the event from bubbling
    }

  return (
    <div onClick={ParentClick}>
         <div onClick={Child2Click}>
        <div onClick={ChildClick}>
            <button onClick={ParentClick}>Click me</button>
        </div>
        </div>
    </div>
  )
}

export default Bubble