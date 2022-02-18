import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <h3 onClick={() => props.handlname(props.Fullname)} style={{color:"blueviolet"}}>my name is {props.Fullname} </h3>
      <p style={{color:"blue"}}>my bio{props.Bio}</p>
      <h3 style={{color:"black"}}>my profession is {props.Profession}</h3>
      <img src="./image/ghaith.jpg"/>"
    </div>
  )
}

export default Profile