import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
    return (
        <>
            <ul className={css.list}>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id}
                        className={css.listItem}>
                            <p><span className={css.itemName}>Name: </span>{name}</p>
                            <p><span className={css.itemName}>Number: </span>{number}</p>
                            <button className={css.deleteButton}
                            type="button" 
                            onClick={() => handleDelete(id)}>
        Delete
      </button>
                        </li>
                    );
                })
                }
            </ul>
        </>
    );
};