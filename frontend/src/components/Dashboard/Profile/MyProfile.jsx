import React from 'react';

const MyProfile = (props) => {
  return (
    <div className='my-profile'>
      <img src='' alt='header' />
      <div className='my-profile__header'>
        <img src={props.user.photo_url} alt='profile' />
        <h2>{props.user.first_name} {props.user.last_name}</h2>
        <div className='rating'>

        </div>
      </div>
      <div className='my-profile__body'>
        <p>{props.user.description}</p>
        <a href='/kids'>My Kids</a>
      </div>
    </div>
  )

}

export default MyProfile;