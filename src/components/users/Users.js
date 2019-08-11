import React, {Component} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


const Users = ({users: users, loading}) => {
    const allUsers = users.map(user => <UserItem key={user.id} {...user}/>);
    const result = loading
        ? <Spinner/>
        : <div
            style={userStyle}>
            {allUsers}
        </div>;
    return (
        <React.Fragment>
            {result}
        </React.Fragment>
    );
};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};


export default Users;