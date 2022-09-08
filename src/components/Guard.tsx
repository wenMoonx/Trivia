import React from 'react';

import { useAppSelector } from '../hooks';
import { getStarted } from '../reducer/quizSlice';

interface IProps {
    children: React.ReactElement
}

const Guard: React.FC<IProps> = ({children}) => {

    let isStarted: boolean = useAppSelector(getStarted)

    return isStarted ? (
        <>
            {children}
        </>
    ) :
    (
        <div>Can't access now.</div>
    );
}

export default Guard;