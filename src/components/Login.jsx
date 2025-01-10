import React, { useState } from "react";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="login">
      <div className="logincontainer">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <form>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          {isRegistering && (
            <div className="formgroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        <p className="togglelink">
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <a onClick={toggleForm} style={{ cursor: "pointer", color: "blue" }}>
            {isRegistering ? "Login here" : "Register here"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
