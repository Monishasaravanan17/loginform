import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
function Login(){
  const history = useHistory();
  const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const loginsubmit = (e) => {
      e.preventDefault();
      console.log("login submitted");
      Axios.post("http://localhost:3001/api/login" , {
        email:email,
        password:password
      }).then((res) => {
        console.log(res,"responsing")
        if(res.data.message === "success"){
          console.log('...', res.data);
          history.push('/Dashboard');
        }else{
          alert(res.data.message);
        }
          
        
       
      }).catch(err => {
        console.log(err);
    });
    }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginsubmit}>
        <div>
        <label>Username  </label>
        <input type="email"  required onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
        </div><br/>
        <div>
          <label>Password  </label>
          <input type="password"  required onChange={(e) => {
                        setpassword(e.target.value)
                    }}></input>
        </div><br/>
        <div>
          <button type="submit"> Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;