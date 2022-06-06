import React from 'react'
import './Profile.css'
function Profile() {
  return (
    <div className='profile'>
      <div className='photodiv'>
        <img className='photo' src='index.png'></img>

      </div>
      <div className='namediv'>
        <h6 className='name'>Hi</h6><span className='span'>I am</span> <h4 className='name'>Sushanth . A</h4>
      </div>
      <hr className='hr'></hr>
      <div className='aboutdiv'>
        <p className='about'>WEB DESIGNER // REACT JS // CSS // BOOTSTRAP </p>
      </div>
    </div>
  )
}

export default Profile