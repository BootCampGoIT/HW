import constants from './contactsConstants';
import { v4 as uuidv4 } from 'uuid';

const addContact = (contact) => {
    return {
        type: constants.ADD_CONTACT,
        payload: {
            ...contact,
            id: uuidv4()
        }
    }
};

const removeContact = (id) => {
    return {
        type: constants.REMOVE_CONTACT,
        payload: id
    }
};

const getFilterValue = (filter) => {
    return {
        type: constants.FILTER_CONTACT,
        payload: filter,
    }
}

const existContact = () => {
    return {
        type: constants.EXIST_CONTACT,
    }
}

export default { addContact, removeContact, getFilterValue, existContact };