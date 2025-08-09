import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice'
import navigationReducer from './slices/navigationSlice'

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    navigation: navigationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
