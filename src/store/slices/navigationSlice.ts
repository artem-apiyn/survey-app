import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
    currentQuestionId: number;
}

const initialState: NavigationState = {
    currentQuestionId: 0
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        nextQuestion: (state) => {
            state.currentQuestionId += 1;
        },
        startQuestions: (state) => {
            state.currentQuestionId = 0
        }
    }
})
export const {nextQuestion, startQuestions} = navigationSlice.actions;
export default navigationSlice.reducer