import React from 'react'


const User=({name="yes", color="pink"}) =>{
  return (
    <h2 style={{color:color}}>{name}</h2>
  )
}

export default User