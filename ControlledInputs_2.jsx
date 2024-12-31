import React, { useState } from 'react'
import { useRef } from 'react'

function ControlledInputs() {
    const nameref = useRef(null)
    const mobileref = useRef(null)
    const addressref = useRef(null)
    const pincoderef = useRef(null)

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')

    function view() {
        if (
            !nameref.current.value ||
            !mobileref.current.value ||
            !addressref.current.value ||
            !pincoderef.current.value
        ) {
            // setError('All fields are required!');
            alert('All fields are required!');
            return;
        }
    
        console.log("hello");
        setName(nameref.current.value);
        setAddress(addressref.current.value);
        setMobile(mobileref.current.value);
        setPincode(pincoderef.current.value); // Corrected to use pincoderef
    }
    return (
        <div>
            <h1>Control Inputs</h1>
            <label htmlFor="name">
                Name : <input
                    type="text"
                    name=""
                    id="name"
                    ref={nameref}
                />
            </label><br /><br />
            <label htmlFor="mobile">
                Mobile : <input
                    type="text"
                    name=""
                    id="mobile"
                    ref={mobileref}
                />
            </label><br /><br />
            <label htmlFor="address">
                Address : <input
                    type="text"
                    name=""
                    id="address"
                    ref={addressref}
                />
            </label><br /><br />
            <label htmlFor="pincode">
                Pincode : <input
                    type="text"
                    name=""
                    id="pincode"
                    ref={pincoderef}
                />
            </label> <br /><br />
            <input onClick={view} type="button" value="submit" name="" id="" />
            <h1> {name} </h1>
            <h1> {mobile} </h1>
            <h1> {address} </h1>
            <h1> {pincode} </h1>
        </div>
    )
}

export default ControlledInputs
