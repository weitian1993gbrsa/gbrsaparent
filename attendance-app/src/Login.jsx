import React from "react";

function Login({ onLogin }) {
  return (
    <div>
      <p>Please login to see your child’s attendance & receipt file.</p>
      <button onClick={onLogin}>Login / Signup</button>
    </div>
  );
}

export default Login;