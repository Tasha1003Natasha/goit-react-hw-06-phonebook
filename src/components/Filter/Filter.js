import styles from '../Filter/Filter.module.css';
import { filterUser } from 'redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const formSubmitFilter = event =>
    dispatch(filterUser(event.currentTarget.value));

  return (
    <label className={styles.label__input}>
      <p className={styles.filter__text}>Find contacts by name</p>
      <input
        type="text"
        name="name"
        value={filter}
        className={styles.filter__input}
        onChange={formSubmitFilter}
      />
    </label>
  );
};
