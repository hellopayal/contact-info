import React, { useState } from 'react'

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
        phonenumber: "",
    });
    let name, value;

    const getData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    };

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, address, phonenumber } = user;
        if ((name && email && address && phonenumber)) {
            const res = await fetch(
                "https://react-form-cda4a-default-rtdb.firebaseio.com/data.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        address,
                        phonenumber,
                    }),
                }
            );
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    address: "",
                    phonenumber: "",
                });
                alert("Data is Stored")
            }
        }
        else {
            alert("Please fill all the data")
        }

    };

    return (
        <div>
            <form method="POST">
                <div className="form-row">
                    <div className="form-group">
                        <textarea type="email" className="form-control" name="name" value={user.name} placeholder="Enter your Name" onChange={getData} />
                    </div>
                    <div className="form-group ">
                        <textarea type="email" className="form-control" name="email" value={user.email} placeholder="Enter your Email" onChange={getData} />
                    </div>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" name="address" value={user.address} placeholder="Enter your Address" onChange={getData} />
                </div>
                <div className="form-row">
                    <textarea type="number" className="form-control" name="phonenumber" value={user.phonenumber} placeholder="Enter your PhoneNumber" onChange={getData} />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>

                </div>
            </form>
        </div>
    )
}

export default Contact