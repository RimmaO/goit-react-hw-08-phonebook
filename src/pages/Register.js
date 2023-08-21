import { Button, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

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

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label style={styles.label}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label style={styles.label}>
        Email
        <Input type="email" name="email" required />
      </label>
      <label style={styles.label}>
        Password
        <Input type="password" name="password" required />
      </label>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
