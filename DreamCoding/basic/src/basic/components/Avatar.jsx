import React from 'react';


export default function Profile({image, isNew}) {
  return (
    <div className='avatar'>
      <img
        className='photo'
        src={image}
        alt='avatar'
      />
      {isNew && <span className='new'>new</span>}
    </div>
  )
}