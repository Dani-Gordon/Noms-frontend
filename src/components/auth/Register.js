import React from 'react';
import { registerUser } from '../../lib/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [usernameValue, setUsernameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [passwordConfirmationValue, setPasswordConfirmationValue] =
    React.useState('');

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmationValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser({
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      password_confirmation: passwordConfirmationValue,
    });
    navigate('/login');
  };

  return (
    <>
      <h1 className="title is-1 has-text-centered">Register Here</h1>
      <section className="section">
        <div className="container">
          <div className="column is-half is-offset-one-quarter box">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    id="username"
                    value={usernameValue}
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    id="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    id="password"
                    placeholder="8-12 characters - one upper/lower and special chararacter"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="password" className="label">
                  Confirm Password
                </label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    id="passwordConfirmation"
                    value={passwordConfirmationValue}
                    onChange={handlePasswordConfirmationChange}
                  />
                </div>
              </div>
              <input
                type="submit"
                className="button is-dark is-responsive"
                value="Register"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
