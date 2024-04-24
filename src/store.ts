import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from './redux/reducers/modalReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    modal: modalReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
