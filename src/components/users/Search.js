import React, {Component} from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
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
            </div>
        );
    }
}

export default Search;