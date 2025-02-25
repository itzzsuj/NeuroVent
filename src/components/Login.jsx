import React, { useState } from "react";
import { auth } from "../firebase/firebase"; // Import Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setError(""); // Reset error message when switching forms
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isRegistering) {
      // Registration Logic
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful!");
      } catch (error) {
        setError(error.message);
      }
    } else {
      // Login Logic
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="logincontainer">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        {error && <p className="error">{error}</p>} {/* Show error messages */}
        <form onSubmit={handleSubmit}>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isRegistering && (
            <div className="formgroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        <p className="togglelink">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleForm}
            style={{ cursor: "pointer", color: "blue", background: "none", border: "none", textDecoration: "underline" }}
          >
            {isRegistering ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
