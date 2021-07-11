import React, { useContext, useEffect } from "react";
import ContactFilter from "../components/contacts/ContactFilter";
import ContactForm from "../components/contacts/ContactForm";
import Contacts from "../components/contacts/Contacts";
import AuthContext from "../context/auth/AuthContext";

const Home = (props) => {
  const { loadUser, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) props.history.push("/login");
    else loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
