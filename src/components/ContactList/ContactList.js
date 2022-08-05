import styles from '../ContactList/ContactList.module.css';
import { deleteUser } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const { items, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteUser(id));

  const getSubmitContacts = (items, filter) => {
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactList = getSubmitContacts(items, filter);

  return (
    <ul className={styles.contact__list}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={styles.contact__item} key={id}>
            {name} : {number}
            <button
              onClick={() => handleDelete(id)}
              type="button"
              className={styles.contact__btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
