import client from "../../apollo";
import { GET_REPOSITORIES } from "../../graphql/queries";
import { Dispatch } from 'redux';
import { FetchRepositoriesFailure, FetchRepositoriesRequest, FetchRepositoriesSuccess } from "../../interfaces";

export type AppDispatch = Dispatch<FetchRepositoriesRequest | FetchRepositoriesSuccess | FetchRepositoriesFailure>;

export const fetchRepositories = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({ type: 'FETCH_REPOSITORIES_REQUEST' });
        try {
            const { data } = await client.query({
                query: GET_REPOSITORIES,
            });
            dispatch({ type: 'FETCH_REPOSITORIES_SUCCESS', payload: data.viewer.repositories.nodes });
        } catch (error) {
            dispatch({ type: 'FETCH_REPOSITORIES_FAILURE', payload: 'Fetch Repositories Failure' });
        }
    };
};
