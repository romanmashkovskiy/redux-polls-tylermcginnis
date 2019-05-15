import {combineReducers} from 'redux';
import users from './users';
import polls from './polls';
import authedUser from './authUser';
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
        users,
        polls,
        authedUser,
        loadingBar: loadingBarReducer
    }
);