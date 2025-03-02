import css from "./Contact.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact({ data: { name, phone, id }, onDelete }) {
  return (
    <>
      <ul className={css.contactDetailsList}>
        <li className={css.contactDetailsItem}>
          <PersonIcon className={css.icon} />
          <p>{name}</p>
        </li>
        <li className={css.contactDetailsItem}>
          <PhoneIcon className={css.icon} />
          <p>{phone}</p>
        </li>
      </ul>
      <button
        className={css.buttonRed}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
