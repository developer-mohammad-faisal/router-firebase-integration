import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase-init';

const auth = getAuth(app)

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from, { replace: true });
    })
  }

  return (
    <div>
      
      <div style={{margin: '20px'}} >
        <button onClick={handleGoogleSignIn} >Google Sing In</button>
      </div>

        <h3>Please Login</h3>
        <form>
          <input type="email" name="email" placeholder='Your Email' id="" />
          <br />
          <input type="password" name="password" placeholder='Password' id="" />
          <br />
          <input type="submit" value="Login" />
        </form>
    </div>
  );
};

export default Login;