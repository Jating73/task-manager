import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { sendGetRequest } from '../utilities/utils';
import { API_LIST } from '../utilities/constants';
import UserList from '../components/user/UserList';

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUsers() {
        const url = process.env.REACT_APP_BASE_URL + API_LIST.FETCH_USERS;
        const token = process.env.REACT_APP_API_KEY;
        const headers = {
            AuthToken: token
        };

        const data = await sendGetRequest(url, headers);
        if (data.status === "success") {
            return data.users;
        }
    }

    useEffect(() => {

        const getUsers = async () => {
            const users = await fetchUsers();
            setLoading(false);
            setUsers(users);
        };

        setLoading(true);
        getUsers();

    }, []);

    if (loading) {
        return (
            <Container style={{height: "100vh"}} className="d-flex justify-content-center align-items-center">
                <Spinner className='text-center' animation='border' variant='info' />
            </Container>
        )
    }

    return (
        <Container>
            <h1 className='text-center'>Users</h1>
            <UserList users={users} />
        </Container>
    )
}

export default User
