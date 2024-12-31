import { useState } from "react"
import { useRef } from "react"

useState
function ControlledInputs() {
    const nameref = useRef(null)
    const numberref = useRef(null)
    const mailref = useRef(null)
    const addressref = useRef(null)

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [mail, setMail] = useState('')
    const [address, setAddress] = useState('')
    function submitchange() {
        setName(nameref.current.value)
        setNumber(numberref.current.value)
        setMail(mailref.current.value)
        setAddress(addressref.current.value)
    }


    return (
        <div>
            <h1>
                {/* Controoled Inputs */}
            </h1>
            <label htmlFor="name">Name{' '}</label>
            <input type="text"
                placeholder='Enter Name'
                ref={nameref}
                name="" id="name" /><br /><br />
            <label htmlFor="number">Number{' '}</label>

            <input type="text"
                placeholder='Enter Number'
                ref={numberref}
                name="" id="number" /><br /><br />
            <label htmlFor="mail">Mail{' '}</label>

            <input type="text"
                placeholder='Enter Mail'
                ref={mailref}
                name="" id="mail" /><br /><br />
            <label htmlFor="address">address{' '}</label>

            <input type="text"
                placeholder='Enter Address'
                ref={addressref}
                name="" id="address" /><br /><br />
            <button onClick={submitchange}>Submit</button>
            <h1>{name}</h1>
            <h1>{number}</h1>
            <h1>{mail}</h1>
            <h1>{address}</h1>

        </div>
    )
}

export default ControlledInputs
