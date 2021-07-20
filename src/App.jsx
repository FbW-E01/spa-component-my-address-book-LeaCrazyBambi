import { useState } from "react"

export default function App() {
    const [addresses, setAddresses] = useState([])
    // const name = "Lea H."setName(event.target.value)
    const [name, setName] = useState("Hans") 

    const [number, setNumber] = useState("176")
    return (
        <div>
        <form onSubmit={
            (event) => {
                event.preventDefault()
                setAddresses([...addresses, {name: name, number: number}])
            }
        }>
            <input type="text" value={name} onChange={
                (event) => {
                    setName(event.target.value)
                                
            }}></input>
            <br></br>
            <input type="text" value={number} onChange={        
                (event) => {
                    setNumber(event.target.value)
            }}></input>
            <br></br>

            <button>Save!</button>
        </form> 
        <ul>
            <li>Laura 05765</li>
            <li>Lou 987654</li>
            {addresses.map((address) => {
                return <li>
                    {address.name} {address.number}
                </li>
            })}
        </ul>
        </div>
    )
}


