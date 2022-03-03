import { CATEGORIES_ACTIONS } from "./categories.action";

const categoriesList = [
    { key: '1', name: 'Business' },
    { key: '2', name: 'Entertainment' },
    { key: '3', name: 'General' },
    { key: '4', name: 'Health' },
    { key: '5', name: 'Science' },
    { key: '6', name: 'Sports' },
    { key: '7', name: 'Technology' }
];

const initialState = {
    list: categoriesList,
    selected: ''
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_ACTIONS.SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            };
        case CATEGORIES_ACTIONS.RESET_SELECTED:
            return {
                ...state,
                selected: ''
            };
        default:
            return state;
    }
};
export default reducer;
