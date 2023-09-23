export const Contacts = ({ contacts }) => {
    return (
        <>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id}>
                            <p>Name: {name}</p>
                            <p>Number: {number}</p>
                        </li>
                    );
                })
                }
            </ul>
        </>
    );
};