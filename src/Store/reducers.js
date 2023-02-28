import { TOGGLE_BUTTON_COLOR } from "./action";

const initialState = {
    buttonColor: 'red',
};

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BUTTON_COLOR:
            return {
                ...state,
                buttonColor: state.buttonColor === 'grey' ? 'red' : 'grey',
            };
        default:
            return state;
    }
};

export default buttonReducer;
