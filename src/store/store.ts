import { configureStore} from '@reduxjs/toolkit';
import todoSlice from '../screens/Todo/features/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoSlice
    },
})
