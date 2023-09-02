import React, { useContext, useState } from 'react'
import { Usercontext } from '../contexts/Usercontext'

const Updateuser = () => {
  const { user, setUser } = useContext(Usercontext)
  const [updatedData, setUpdatedData] = useState({
    name: user.name,
    age: user.age,
    sex: user.sex
  })
  const Updateuser = () => {
    console.log('updated data is:', updatedData)
  }
  return (
    <div className='my-2'>
      <div className="card">
        <div className="card-header">
          <span>Update User</span>
        </div>
        <div className="card-body">
          <input type="text" className='form-control my-2' placeholder='Name' onChange={(e) => { setUpdatedData({ ...updatedData, name: e.target.value }) }} />
          <input type="number" placeholder='Age' className='form-control my-2' onChange={(e) => { setUpdatedData({ ...updatedData, age: e.target.value }) }} />
          <select name="" id="" className='form-control my-2' onChange={(e) => { setUpdatedData({ ...updatedData, sex: e.target.value }) }}>
            <option value="male">Male</option>
            <option value="famale">Famale</option>
          </select>
          <button className='btn btn-secondary' onClick={() => Updateuser()}>Update User</button>

        </div>
      </div>

    </div>
  )
}

export default Updateuser