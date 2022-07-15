import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { sendGetRequest } from '../utilities/utils';
import { API_LIST } from '../utilities/constants';
import TaskList from '../components/task/TaskList';

function Task() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchTasks() {
        const url = process.env.REACT_APP_BASE_URL + API_LIST.FETCH_TASKS;
        const token = process.env.REACT_APP_API_KEY;
        const headers = {
            AuthToken: token
        };

        const data = await sendGetRequest(url, headers);
        if (data.status === "success") {
            return data.tasks;
        }
    }

    useEffect(() => {

        const getTasks = async () => {
            const users = await fetchTasks();
            setLoading(false);
            setTasks(users);
        };

        setLoading(true);
        getTasks();

    }, []);

    if (loading) {
        return (
            <Container style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
                <Spinner className='text-center' animation='border' variant='info' />
            </Container>
        )
    }

    return (
        <Container>
            <div className='d-flex justify-content-center mb-4'>
                <h1 className='text-center'>All Tasks</h1>
            </div>
            <TaskList tasks={tasks} />
        </Container>
    )
}

export default Task
