import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/ContactContext";

const ContactItem = ({ contact }) => {
  const { deleteContact, setCurrent, clearCurrent } =
    useContext(ContactContext);

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        <span
          style={{ marginLeft: 4, textTransform: "capitalize", float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' style={{ marginRight: 4 }} />
            {email}
          </li>
        )}

        {phone && (
          <li>
            <i className='fas fa-phone' style={{ marginRight: 4 }} />
            {phone}
          </li>
        )}
      </ul>

      <div>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
