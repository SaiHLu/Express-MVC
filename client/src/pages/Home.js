import React from "react";
import ContactForm from "../components/contacts/ContactForm";
import Contacts from "../components/contacts/Contacts";

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
