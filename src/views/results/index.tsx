import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "./../../hooks";
import { getResults, reset } from "./../../reducer";
import { useNavigate } from "react-router-dom";

import Item from "./item";

const Results = () => {
	const results = useAppSelector(getResults);
	const dispatch = useAppDispatch();

	const rightCount = results.filter((r: any) => r.right).length;
	const navigate = useNavigate();

	const onClickReset = useCallback(() => {
		dispatch(reset());
		navigate("/");
	}, [navigate, dispatch]);

	return (
		<div className="container">
			<div className="heading">
				You Scored
				<br />
				{rightCount} / {results.length}
			</div>
			<div className="results">
				{results.map((result: any, index: number) => (
					<Item right={result.right} question={result.question} />
				))}
			</div>
			<button className="reset-button" onClick={onClickReset}>
				PLAY AGAIN?
			</button>
		</div>
	);
};

export default Results;
