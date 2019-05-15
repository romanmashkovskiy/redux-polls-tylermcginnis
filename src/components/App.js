import React, {Component} from 'react'
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {handleInitialData} from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderborad from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';
import Nav from './Nav';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <LoadingBar/>
                <div className='container'>
                    <Nav/>
                    {this.props.loading
                        ? null
                        : <Switch>
                            <Route exact path='/' component={Dashboard}/>
                            <Route path='/leaderboard' component={Leaderborad}/>
                            <Route path='/addpoll' component={AddPoll}/>
                            <Route path='/poll/:id' component={Poll}/>
                        </Switch>}
                </div>
            </Router>
        )
    }
}

const mapStateToProps = ({authedUser}) => ({
    loading: authedUser === null
});

export default connect(mapStateToProps)(App);