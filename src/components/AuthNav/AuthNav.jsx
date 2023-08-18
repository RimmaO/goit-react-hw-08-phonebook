import { NavigationLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </div>
  );
};

export default AuthNav;
