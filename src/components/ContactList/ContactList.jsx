import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={css.contactsList}>
        {contacts.map((contactData) => (
          <li className={css.contactCard} key={contactData.id}>
            <Contact data={contactData} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
