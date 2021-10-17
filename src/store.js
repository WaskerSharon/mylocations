
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './components/features/users/usersSlice';

export default configureStore({
    reducer: {
        users: usersReducer,
    },
});