import React from 'react';
import Navbar from '../Navbar';
import './MyProfile.scss'
import Button from '../../Button';

const handleClickEdit = () => {
  //does nothing for now
}

const MyProfile = (props) => {
  return (
    <>
    <Navbar />
    <div className='my-profile'>
      <img src='' alt='header' />
      <div className='my-profile__header'>
        <img src={props.user.photo_url} alt='profile-pic' />
        <h2>{props.user.first_name} {props.user.last_name}</h2>
        <div className='rating'>

        </div>
      </div>
      <div className='my-profile__body'>
        <p>{props.user.description}</p>
        <Button onClick={handleClickEdit} text='Edit'/>
      </div>
      {/* <div className='my-profile__footer'>
        <a href='/kids'>My Kids</a>
      </div> */}
    </div>
    </>
  )

}

export default MyProfile;