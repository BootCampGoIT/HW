import React from 'react';
import {connect} from 'react-redux'
import contactsActions from '../../../redux/contacts/contactsActions';

const Filter = ({ filter, getFilterValue }) => {
    return (
        <label>Filter:
            <input type="text" value={filter} onChange={(e)=>getFilterValue(e.target.value)} />
        </label>

    );
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    getFilterValue: contactsActions.getFilterValue,
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);