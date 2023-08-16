import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Copyright &copy; 2023 GoIT. Created by Rimma Ohanesian.</footer>

      <Toaster />
    </>
  );
};

export default Layout;
