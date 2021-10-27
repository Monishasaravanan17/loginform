import {
    
    Link
  } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>Welcome</h1>
            <button>
            <Link to='/Login'>Login</Link></button>

            <button><Link to='/Register'>Sign in</Link></button>
        </div>
    )
};
export default Home;