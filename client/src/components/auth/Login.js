import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { setAlert } = useContext(AlertContext);
  const { loginUser, error, clearErrors, isAuthenticated } =
    useContext(AuthContext);

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");

    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, setAlert, clearErrors, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill all fields", "danger");
    } else {
      loginUser({ email, password });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
