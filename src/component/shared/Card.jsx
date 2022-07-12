import React from 'react'
import pic3 from '../../assets/pic3.jpg'
function Card(props) {
  return (
    <div className='card__content'>
        <img src={pic3} alt="" />
        <div className="card__detail">
            <h2>Lorem ipsum dolor</h2>
            <p>C. {props.chap} - <span>{props.time} TRƯỚC</span></p>
        </div>
    </div>
  )
}

export default Card