
interface Prop {
    right: boolean,
    question: string
}

const Item = (props: Prop) => {
    const { right, question } = props
    return (
        <div className="item">
            <div className="tick">{right ? 'O' : 'X'}</div>
            <div className="question">
                {question}
            </div>
        </div>
    )
}

export default Item