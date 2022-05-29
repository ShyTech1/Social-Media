import React from 'react';
import "./button.css";

export default function Button(props) {
  return (
    <div>
        <button className='button'> {props.text} {props.name} </button>
    </div>
  )
}
