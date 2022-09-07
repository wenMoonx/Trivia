
export default interface IQuiz {
    category: string,
    question: string,
    page: number,
    total_pages: number,
    onAnswer: Function
}