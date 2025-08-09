import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnswerState } from "../../types/qustion";



const initialState: AnswerState = {}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        toggleOption: (
            state,
            action: PayloadAction<{questionId: number, value: string, checked: boolean, type: "checkbox" | "radio"}>
        ) => {
            const {questionId, value, checked, type} = action.payload;

            if(!state[questionId]) {
                state[questionId] = { answers: [], skipped: false };
            }
            state[questionId].skipped = false
            switch(type){
                case('radio'): 
                    state[questionId].answers = [value];
                    break;
                case('checkbox'):
                    if (checked) {
                        if (!state[questionId].answers.includes(value)) {
                            state[questionId].answers.push(value);
                        }
                    } else {
                        state[questionId].answers = state[questionId].answers.filter(v => v !== value);
                    }
                    break;
            }
        },
        skipOptions: (
            state,
            action: PayloadAction<{questionId: number}>
        ) => {
            const {questionId} = action.payload
             if (!state[questionId]) {
                state[questionId] = { answers: [], skipped: true };
            } else {
                state[questionId].answers = [];
                state[questionId].skipped = true;
            }
        },
        deleteOptions: () => {
            return {}
        }
    }
})

export const {toggleOption, skipOptions, deleteOptions} = quizSlice.actions;
export default quizSlice.reducer;