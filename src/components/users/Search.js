import React, {Component} from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.props.setAlert();
            this.setState({text: ''});
        }
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}
                    className="form">
                    <input type="text"
                           onChange={this.onChange}
                           value={this.state.text}
                           name="text"
                           placeholder="Search Users..."/>
                    <input type="submit"
                           className="btn btn-dark btn-block"
                           value="search"/>
                </form>
                <button
                    onClick={this.props.clearUsers}
                    className="btn btn-light btn-block"
                >Clear</button>
            </div>
        );
    }
}

export default Search;