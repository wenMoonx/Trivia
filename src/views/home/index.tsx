
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className="heading">Welcome to the<br/>Trivia Challenge!</div>
            <div className="comment">You will be presented with 10 True or False questions.</div>
            <div className="question">Can you score 100%?</div>
            <Link to='/quiz'>Begin</Link>
        </div>
    )
}

export default Home