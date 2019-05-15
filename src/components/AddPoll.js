import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddPoll} from '../actions/polls';

class AddPoll extends Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: ''
    };

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState(() => ({
            [name]: value
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddPoll(this.state));
        this.props.history.push('/');
    };

    isDisabled = () => {
        const {question, a, b, c, d} = this.state;

        return question === ''
            || a === ''
            || b === ''
            || c === ''
            || d === ''
    };

    render() {
        const {question, a, b, c, d} = this.state;

        return (
            <form className='add-form' onSubmit={this.handleSubmit}>
                <h3>What is your question?</h3>

                <input
                    className='input'
                    name='question'
                    value={question}
                    onChange={this.handleInputChange}
                />

                <h3>What are the options?</h3>

                <label className='label' htmlFor='a'>A.</label>
                <input
                    className='input'
                    name='a'
                    value={a}
                    onChange={this.handleInputChange}
                    id='a'
                />

                <label className='label' htmlFor='b'>B.</label>
                <input
                    className='input'
                    name='b'
                    value={b}
                    onChange={this.handleInputChange}
                    id='b'
                />

                <label className='label' htmlFor='c'>C.</label>
                <input
                    className='input'
                    name='c'
                    value={c}
                    onChange={this.handleInputChange}
                    id='c'
                />

                <label className='label' htmlFor='d'>D.</label>
                <input
                    className='input'
                    name='d'
                    value={d}
                    onChange={this.handleInputChange}
                    id='d'
                />

                <button
                    className='btn'
                    type='submit'
                    disabled={this.isDisabled()}
                >
                    submit
                </button>

            </form>
        );
    }
}

export default connect()(AddPoll);