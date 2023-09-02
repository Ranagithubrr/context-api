import React, { useContext } from 'react'
import { Namecontext } from '../contexts/Namecontext';
import Updateuser from './Updateuser';

const Component2 = () => {
    const {name,setName} = useContext(Namecontext);
    return (
        <div className="col-6 my-2">
            <div className="card">
                <div className="card-header">
                    <span>I'm Component 2</span>
                </div>
                <div className="card-body">
                    <b>Value is: {name}</b>
                    <button
                     className='btn btn-success d-block'
                     onClick={()=>{
                        setName("Changed")
                     }}
                     >Change from here</button>
                </div>
            </div>  
            <Updateuser />          
        </div>
    )
}

export default Component2;