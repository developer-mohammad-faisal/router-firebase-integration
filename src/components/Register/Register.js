import React from "react";

const Register = () => {
  return (
    <div>

    <h3>Please Register</h3>


      <form>
        <input type="text" name="text" placeholder="Your Name" id="" />
        <br />
        <input type="email" name="email" placeholder="Your Email" id="" />
        <br />
        <input type="password" name="password"  placeholder="Password"id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
