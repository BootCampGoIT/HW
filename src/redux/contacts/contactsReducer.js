
import constants from './contactsConstants';
import { combineReducers } from 'redux'



const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_CONTACT:
            return [...state, action.payload];

        case constants.REMOVE_CONTACT:
            return state.filter(contact => contact.id !== action.payload);

        default:
            return state;
    }
}

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case constants.FILTER_CONTACT:
            return action.payload;

        default:
            return state;
    }
}

const alertReducer = (state = false, action) => {
    switch (action.type) {
        case constants.EXIST_CONTACT:
            return !state;

        default:
            return state;
    }
}

export default combineReducers({ items: contactsReducer, filter: filterReducer, alert: alertReducer });