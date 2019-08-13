import './App.css';
import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/pages/About';
import Alert from './components/layout/Alert';

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null
    };

    async componentDidMount() {
        /*this.setState(() => ({loading: true}));
        const result = await axios.get(`https://api.github.com/users?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        const users = result.data;
        this.setState(() => ({users, loading: false}));*/
    }

    searchUsers = async text => {
        this.setState(() => ({loading: true}));
        const result = await axios.get(
            `https://api.github.com/search/users?q=${text}`);
        const users = result.data.items;
        setTimeout(() => {
            this.setState(() => ({users, loading: false}));
        }, 1000);

    };

    clearUsers = () => {
        this.setState(() => ({users: []}));
    };

    setAlert = (msg, type) => {
        if (msg && type){
            this.setState({alert: {msg, type}});
        } else {
            this.setState({alert: null});
        }
    };

    getUser = async (userName) => {
        this.setState(() => ({loading: true}));

        const result = await axios.get(
            `https://api.github.com/users/${userName}`);
        const user = result.data;
        setTimeout(() => {
            this.setState(() => ({user, loading: false}));
        }, 1000);
    };

    render() {
        const {user, alert, loading} = this.state;
        return (
            <Router>
                <div className='App'>
                    <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' render={(props) => (
                                <Fragment>
                                    {alert && <Alert {...alert}/>}
                                    <Search
                                        searchUsers={this.searchUsers}
                                        clearUsers={this.clearUsers}
                                        setAlert={this.setAlert}
                                    />
                                    <Users {...this.state}/>
                                </Fragment>
                            )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User {...props} getUser={this.getUser} user={user} loading={loading}/>
                            )}/>
                        </Switch>

                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
