import React from 'react'
import './App.css'

const Card = (props) => {
  return (
    <div className="card-div">
      <div className="card-item">
        <img src={props.data.owner.avatar_url} alt="avatar"/>
        <p>  {props.data.name}</p>
        <p> {`@${props.data.owner.login}`}</p>
        <p>{`Stars: ${props.data.stargazers_count}`}</p>
 
      </div>
    </div>
  )
}

export default Card;