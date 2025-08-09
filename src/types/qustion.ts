export interface QuestionState {
    answers: string[];
    skipped: boolean;
}
export interface AnswerState {
    [questionId: number]: QuestionState;
}

