import React from 'react'
import './Creative.css'

const Creative = (props) => {
  return (
    <div className='creative_main'>
        <div>
        {typeof props.img === 'string' ? (
    <img className='Creative_img' src={props.img} alt={props.heading} />
  ) : (
    <div className='Creative_img'>{props.img}</div>
  )}
        </div>
 
  <h2>{props.heading}</h2>
  <p>{props.para}</p>
</div>

  )
}

export default Creative
