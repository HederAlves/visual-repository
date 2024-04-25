import { Action, ModalState } from "../../interfaces";

const initialState: ModalState = {
    isOpen: false,
    selectedRepository: null,
};

const modalReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isOpen: true,
                selectedRepository: action.payload,
            };
        case 'CLOSE_MODAL':
            return {
                ...state,
                isOpen: false,
                selectedRepository: null,
            };
        default:
            return state;
    }
};

export default modalReducer;
