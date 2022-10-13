import { useState } from "react";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => {
          onLogin(currentUser);
        });
      } else {
        res.json().then((err) => setError(err.error));
      }
    });

    
  }

  return (
    <>
      <p>Login Page</p>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          value={formData.username}
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Type username"
        />
        <label>Password</label>
        <input
          value={formData.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="Type password"
        />
        <button>Login</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
}

export default Login;
