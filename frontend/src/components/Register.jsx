import React, { useState } from "react";
import Axios from 'axios';
import { useHistory } from "react-router-dom";
function Register() {

    const history = useHistory();

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitform = (e) => {
        e.preventDefault();
        console.log('submit form triggred');
        Axios.post('http://localhost:3001/api/register', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        }).then((res) => {
            console.log('...', res.data);
            history.push('/login');
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submitform}> 
                <div>
                    <label>First Name  </label>
                    <input type="text" required onChange={(e) => {
                        setfirstname(e.target.value)
                    }}></input>
                </div><br />
                <div>
                    <label>Last Name  </label>
                    <input type="text" required onChange={(e) => {
                        setlastname(e.target.value)
                    }}></input>
                </div><br />

                <div>
                    <label>Mail id  </label>
                    <input type="email" required onChange={(e) => {
                        setemail(e.target.value)
                    }}></input>
                </div><br />
                <div>
                    <label>Password  </label>
                    <input type="password" required onChange={(e) => {
                        setpassword(e.target.value)
                    }}></input>
                </div><br />
                <div>
                    <button type="submit" >Register</button>
                </div>
            </form>
        </div>
    );
}
export default Register;