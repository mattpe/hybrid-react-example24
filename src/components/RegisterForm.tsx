import {useUser} from '../hooks/apiHooks';
import {useForm} from '../hooks/formHooks';

const RegisterForm = () => {
  const {postUser} = useUser();

  const initValues = {username: '', password: '', email: ''};

  const doRegister = async () => {
    try {
      console.log(inputs);
      await postUser(inputs);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doRegister,
    initValues,
  );

  return (
    <>
      <h3 className="text-3xl">Register</h3>
      <form onSubmit={handleSubmit} className="flex flex-col text-center">
        <div className="flex w-4/5">
          <label className="w-1/3 p-6 text-end" htmlFor="username">
            Username
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="username"
            type="text"
            id="username"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="flex w-4/5">
          <label className="w-1/3 p-6 text-end" htmlFor="password">
            Password
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div className="flex w-4/5">
          <label className="w-1/3 p-6 text-end" htmlFor="email">
            Email
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div className="flex w-4/5 justify-end">
          <button
            className="m-3 w-1/3 rounded-md bg-slate-700 p-3"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
