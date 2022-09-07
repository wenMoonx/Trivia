import { useCallback, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectQuestion, fetchQuestions, setAnswer } from "../../reducer";
import { useNavigate } from "react-router-dom";

import Loading from "./loading";
import Quiz from "./quiz";

const QuizScreen = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const quiz = useAppSelector(selectQuestion);
	const isLoading = Object.keys(quiz).length === 0;

	const { category, page, question, total_pages } = quiz;

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	const onAnswer = useCallback(
		(answer: string) => {
			dispatch(setAnswer(answer));
			if (page === total_pages) navigate("/results");
		},
		[dispatch, page, total_pages, navigate]
	);

	return isLoading ? (
		<Loading />
	) : (
		<Quiz
			category={category}
			page={page}
			question={question}
			total_pages={total_pages}
			onAnswer={onAnswer}
		/>
	);
};

export default QuizScreen;
