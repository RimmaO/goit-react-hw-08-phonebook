import { Button, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const styles = {
  form: {
    width: '320px',
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
  },
};

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label style={styles.label}>
        Email
        <Input type="email" name="email" required />
      </label>
      <label style={styles.label}>
        Password
        <Input type="password" name="password" required />
      </label>
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default Login;
