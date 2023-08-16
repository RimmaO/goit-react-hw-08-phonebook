// import { Toaster } from 'react-hot-toast';

// import Section from './Section/Section';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operation';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
    // <>
    //   <Toaster />

    //   <Section title="Phonebook">
    //     <ContactForm />
    //   </Section>

    //   <Section title="Contacts">
    //     <Filter />

    //     <ContactList />
    //   </Section>
    // </>
  );
}
