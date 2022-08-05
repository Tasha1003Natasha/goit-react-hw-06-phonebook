import { useState } from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import { addUser } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchName = items.find(item => item.name === name);
    if (searchName) {
      alert(`${name}  is already in contacts`);
    } else {
      dispatch(addUser(name, number));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <label className="form__label">
          <p className={styles.form__text}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            className={styles.form__input}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className="form__label">
          <p className={styles.form__text}>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            className={styles.form__input}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button type="submit" className={styles.form__btn}>
        Add contact
      </button>
    </form>
  );
};
