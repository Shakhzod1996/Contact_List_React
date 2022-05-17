import React from 'react'
import './ShowContact.css'

export default function ButtonFilter(props) {
  return (
    <div>
      {props.btns.map((item, i) => (
        <button key={i} id={item} onClick={props.buttonHandler} className='li'>{item}</button>
      ))}
    </div>
  )
}
