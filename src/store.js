
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './components/users/usersSlice';

export default configureStore({
    reducer: {
        users: usersReducer,
    },
});