import React from 'react';
import {connect} from 'react-redux';

const Leaderboard = ({users}) => (
    <ul>
        {users.map((user) => (
            <li className='user' key={user.id}>
                <img src={user.avatarURL} alt={`User avatar ${user.name}`}/>
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.polls} Polls</p>
                    <p>{user.answers} Answers</p>
                </div>
            </li>
        ))}
    </ul>
);

const mapStateToProps = ({users}) => (
    {
        users: Object.keys(users).map((user) => {
            const {name, avatarURL, polls, answers, id} = users[user];

            return {
                id,
                name,
                avatarURL,
                polls: polls.length,
                answers: answers.length
            };
        }).sort((a, b) => b.polls + b.answers - a.polls - a.answers)
    }
);

export default connect(mapStateToProps)(Leaderboard);