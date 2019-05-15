import {savePollAnswer} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const ADD_ANSWER = 'ADD_ANSWER';

const addAnswer = ({id, answer, authedUser}) => ({
    type: ADD_ANSWER,
    id,
    answer,
    authedUser
});

export const handleAddAnswer = (answerData) =>
    (dispatch) => {
        dispatch(showLoading());
        return savePollAnswer(answerData)
            .then(() => {
                dispatch(hideLoading());
                dispatch(addAnswer(answerData))
            })
    };