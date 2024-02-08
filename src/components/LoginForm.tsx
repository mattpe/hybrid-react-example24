import {useAuthentication} from '../hooks/apiHooks';
import {useForm} from '../hooks/formHooks';
import {Credentials} from '../types/LocalTypes';

const LoginForm = () => {
  const {postLogin} = useAuthentication();
  const initValues: Credentials = {username: '', password: ''};

  const doLogin = async () => {
    console.log('submit callback, inputs:', inputs);
    // TODO: use postLogin to authenticate with server
    console.log(await postLogin(inputs as Credentials));
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserWithLevelname">Username</label>
          <input
            name="username"
            type="text"
            id="UserWithLevelname"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
