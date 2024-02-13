import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <h1>My app</h1>
        <nav>
          <ul className="flex justify-end bg-slate-950">
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/upload"
              >
                Upload
              </Link>
            </li>
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="block p-4 text-center text-slate-50 hover:bg-slate-700"
                to="/logout"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright 2024 - NN</p>
      </footer>
    </>
  );
};

export default Layout;
