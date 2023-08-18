import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, Username, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
