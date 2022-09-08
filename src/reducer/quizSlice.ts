import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import Config from "../config";

const quizSlice = createSlice({
	name: "quiz",
	initialState: {
		questions: [],
		answers: [],
		started: false
	},
	reducers: {
		setQuestions: (state: any, action: any) => {
			state.questions = action.payload;
			state.started = true;
		},
		setAnswer: (state: any, action: any) => {
			state.answers.push(action.payload);
		},
		reset: (state: any) => {
			state.questions = [];
			state.answers = [];
		},
		setStarted: (state: any, action: any) => {
			state.started = action.payload;
		}
	},
});

export const { setQuestions, setAnswer, reset, setStarted } = quizSlice.actions;

export const fetchQuestions = () => (dispatch: Dispatch<any>) => {
	axios.get(Config.API_URL).then(({ data }) => {
		const { results } = data;
		dispatch(setQuestions(results));
	});
};

export const selectQuestion = (state: any) => {
	const { quiz } = state;
	const { questions, answers } = quiz;

	if (questions.length > 0) {
		const currentQuestion = questions[answers.length];
		return {
			...currentQuestion,
			page: answers.length + 1,
			total_pages: questions.length,
		};
	}

	return {};
};

export const getResults = (state: any) => {
	const { quiz } = state;
	const { questions, answers } = quiz;

	return questions.map((q: any, index: number) => ({
		question: q.question,
		right: answers[index] === q.correct_answer,
	}));
};

export const getStarted = (state: any) => {
	return state.quiz.started;
}

export default quizSlice.reducer;
