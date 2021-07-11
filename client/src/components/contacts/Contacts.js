import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add some contacts.</h4>;
  }

  return (
    <>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
};

export default Contacts;
