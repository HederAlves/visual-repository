import { RepositoriesAction, State } from "../../interfaces";

const initialState: State = {
    repositories: [],
    loading: false,
    error: null,
};

const repositoriesReducer = (state: State = initialState, action: RepositoriesAction): State => {
    switch (action.type) {
        case 'FETCH_REPOSITORIES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_REPOSITORIES_SUCCESS':
            return {
                ...state,
                repositories: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_REPOSITORIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: 'Fetch repositories failed',
            };
        default:
            return state;
    }
};

export default repositoriesReducer;
