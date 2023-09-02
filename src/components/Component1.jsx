import React, { useContext } from 'react'
import Component2 from './Component2'
import { Namecontext } from '../contexts/Namecontext'
import User from './User';

const Component1 = () => {
    const { name, setName } = useContext(Namecontext);
    return (
        <>
            <div className="col-6 my-2">
                <div className="card">
                    <div className="card-header">
                        <span>I'm Component 1</span>
                    </div>
                    <div className="card-body">
                        <b>Value is: {name}</b>
                        <button
                            className='btn btn-success d-block'
                            onClick={() => {
                                setName("Rana")
                            }}
                        >Change from here</button>
                    </div>
                </div>
                <User />
            </div>
            <Component2 />
        </>
    )
}

export default Component1