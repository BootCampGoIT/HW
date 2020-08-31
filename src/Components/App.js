import React from 'react';

import styles from './App.module.css';
import ContactsForm from './contacts/contactsForm/ContactsForm';
import ContactsList from './contacts/contactsList/ContactsList';
import Filter from './contacts/filter/Filter';
import Alert from './alert/Alert';
import { connect } from 'react-redux'

function App({ alert }) {
  return (
    <div className={styles.App}>
      <ContactsForm />
      {alert && <Alert />}
      <ContactsList />
      <Filter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  }
}

export default connect(mapStateToProps)(App);
