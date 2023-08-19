import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Header, NavigationLink } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          {isLoggedIn && (
            <NavigationLink to="/contacts">Contacts</NavigationLink>
          )}
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Suspense
          fallback={
            <div>
              Loading page...
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <Toaster />
    </>
  );
};

export default Layout;
