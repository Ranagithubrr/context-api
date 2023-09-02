import React, { useContext } from 'react'
import { Usercontext } from '../contexts/Usercontext'

const User = () => {
    const {user,setUser} = useContext(Usercontext)
  return (
    <div>
        <div className="card my-2">
            <div className="card-header">
                <span className='card-title'>User Detail</span>
            </div>
            <div className="card-body">
                <span className='d-block font-semibold'>User name: {user.name}</span>
                <span className='d-block font-semibold'>Age: {user.age}</span>
                <span className='d-block font-semibold'>Sex: {user.sex}</span>
            </div>
        </div>
    </div>
  )
}

export default User