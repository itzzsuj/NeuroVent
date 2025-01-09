function Login() {
  return (
    <div className="login">
      <div className="logincontainer">
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        <p className="registerlink">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
