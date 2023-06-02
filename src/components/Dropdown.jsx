import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const Dropdown = () => {
    const dropDownItems = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="main">
        <div className="drop-container">
            <span>Select Item</span> 
            <span><BsChevronDown /></span>
        </div>
        <ul className='drop-item-container'>
            {dropDownItems.map((item, index) => {
                <li key={index} className='drop-item'>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Dropdown