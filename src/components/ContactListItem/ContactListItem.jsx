import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { Item, Span } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import Loader from 'components/Loader/Loader';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const handleDelete = () => dispatch(deleteContacts({ id, name }));

  return (
    <Span>
      <Item>
        {name}: {number}
      </Item>
      <Button onClick={handleDelete}>Delete</Button>
    </Span>
  );
};
// {isLoading && !error && <Loader />}
export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
