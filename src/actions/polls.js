import {savePoll} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export const receivePolls = (polls) => ({
    type: RECEIVE_POLLS,
    polls
});

const addPoll = (poll) => ({
    type: ADD_POLL,
    poll
});

export const handleAddPoll = (poll) =>
    (dispatch, getState) => {
        const {authedUser} = getState();

        dispatch(showLoading());
        return savePoll({
            ...poll,
            author: authedUser
        })
            .then((poll) => {
                dispatch(addPoll(poll));
                dispatch(hideLoading());
            })
    };