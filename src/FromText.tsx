import React, { useState } from "react";


const FromText = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handelSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({name, email})
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input onChange={(e) => setName(e.target.value)} className="in" type="text" name="name" id="name" />
                <input onChange={(e) => setEmail(e.target.value)} className="in" type="text" name="email" id="email" />
                 <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default FromText;