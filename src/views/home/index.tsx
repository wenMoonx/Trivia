
import { useNavigate } from 'react-router-dom';
import { setStarted } from './../../reducer/quizSlice';
import { useAppDispatch } from "../../hooks";
import { useCallback } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setStarted(false));
    }, [dispatch])

    const onClickBegin = useCallback(() => {
        dispatch(setStarted(true));
        navigate('/quiz');
    }, [dispatch, navigate])

    return (
        <div className="container">
            <div className="heading">Welcome to the<br/>Trivia Challenge!</div>
            <div className="comment">You will be presented with 10 True or False questions.</div>
            <div className="question">Can you score 100%?</div>
            <button onClick={onClickBegin}>Begin</button>
        </div>
    )
}

export default Home