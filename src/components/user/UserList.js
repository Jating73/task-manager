import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserItem from './UserItem'

function UserList({ users }) {
    return (
        <>
            <Row lg={5} md={3} sm={1} className="g-3">
                {users.map(user => (
                    <Col key={user.id}>
                        <UserItem
                            id={user.id}
                            name={user.name}
                            picture={user.picture}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default UserList
