import React from 'react';
import ContactsListItem from './contactsListItem/ContactsListItem';

import { connect } from 'react-redux'

const ContactsList = ({ items = [] }) => {
    return (
        <ul>
            {items.map(contact => <ContactsListItem key={contact.id} id={contact.id} />)}
        </ul>

    );
}

const mapStateToProps = (state) => {
    // console.log('state', state)
    return {
        items: state.items.filter(item => item.name.toLowerCase().includes(state.filter.toLowerCase())),
    }
}

export default connect(mapStateToProps)(ContactsList);