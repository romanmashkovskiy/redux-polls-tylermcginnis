import {getInitialData} from '../utils/api';
import {receivePolls} from './polls';
import {receiveUsers} from './users';
import {setAuthUser} from './authUser';
import {showLoading, hideLoading} from 'react-redux-loading';

const AUTH_ID = 'tylermcginnis';

export const handleInitialData = () =>
    dispatch => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, polls}) => {
                dispatch(receiveUsers(users));
                dispatch(receivePolls(polls));
                dispatch(setAuthUser(AUTH_ID));
                dispatch(hideLoading());
            })
            .catch((err) => console.error(err))
    }
;
