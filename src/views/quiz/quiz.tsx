import IQuiz from "../../interfaces/IQuiz";

const Quiz: React.FC<IQuiz> = (props: IQuiz) => {
	const { category, question, page, total_pages, onAnswer } = props;

	return (
		<div className="container">
			<div className="category">{category}</div>
			<div className="content">
				<div
					className="content-box"
					dangerouslySetInnerHTML={{ __html: question }}
				></div>
				<div className="pagination">
					{page} of {total_pages}
					<div className="buttons">
						<button
							onClick={() => {
								onAnswer("True");
							}}
						>
							True
						</button>
						<button
							onClick={() => {
								onAnswer("False");
							}}
						>
							False
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
