import React from 'react';
import { Card } from 'react-bootstrap';

function UserItem({ id, name, picture }) {
    return (
        <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" className='img-responsive' style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-center align-items-baseline mb-4">
                    <span className="fs-2 text-center">USER ID: {id}</span>
                </Card.Title>
                <div className="mt-auto">
                    <div className="d-flex flex-column align-items-center" style={{ gap: "0.5rem" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem" }}>
                            <div>
                                <span className="fs-3">{name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserItem
