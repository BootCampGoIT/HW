import React, { Component } from 'react';
import { connect } from 'react-redux'
import contactsActions from '../../../redux/contacts/contactsActions';

const initialState = {
    name: '',
    number: ''
}

class ContactsForm extends Component {
    state = {
        ...initialState
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.dublicate()) {

            this.props.onAlert()
            setTimeout(() => { this.props.onAlert() }, 1000)
        } else {

            this.props.onAddContact({ ...this.state })
            this.setState({ ...initialState })
        }

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }


    dublicate = () => {
        return this.props.items.some(item => item.name.toLowerCase() === this.state.name.toLowerCase())
    }
    render() {
        const { name, number } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:<input type="text" name="name" value={name} onChange={this.handleChange} /></label>
                <label>Contact:<input type="text" name="number" value={number} onChange={this.handleChange} /></label>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

const mapDispatchToProps = {
    onAddContact: contactsActions.addContact,
    onAlert: contactsActions.existContact,
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);