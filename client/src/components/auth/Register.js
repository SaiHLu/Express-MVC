import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/AuthContext";

const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { setAlert } = useContext(AlertContext);
  const { registerUser, error, clearErrors, isAuthenticated } =
    useContext(AuthContext);

  const { name, email, password, confirm_password } = user;

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");

    if (error === "User already exists") {
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

    if (name === "" || email === "" || password === "") {
      setAlert("Please fill all fields", "danger");
    } else if (password !== confirm_password) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>

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
            minLength='6'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='confirm_password'>Confirm Password</label>
          <input
            type='password'
            name='confirm_password'
            id='confirm_password'
            value={confirm_password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>

        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
