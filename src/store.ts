import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from './redux/reducers/modalReducer';
import repositoryReducer from './redux/reducers/repositoryReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    modal: modalReducer,
    repositories: repositoryReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
