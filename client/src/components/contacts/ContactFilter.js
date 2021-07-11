import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilters, filtered } = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value) {
      filterContacts(e.target.value);
    } else {
      clearFilters();
    }
  };

  return (
    <form>
      <input type='text' ref={text} onChange={onChange} />
    </form>
  );
};

export default ContactFilter;
