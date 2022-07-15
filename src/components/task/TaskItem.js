import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { DATE_CONVERSION_TYPE } from '../../utilities/constants';
import { formatDateTime } from '../../utilities/utils';

function TaskItem({ id, assigned_name, assigned_to, created_on, due_date, message }) {
  return (
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className='mr-2'>#{id}</span>
          <Button className='ml-auto rounded-circle' variant='danger' style={{ height: "3rem", width: "3rem" }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
          </Button>
        </Card.Title>
        <div className="mt-auto">
          <div className="d-flex flex-column" style={{ gap: "0.5rem" }}>
            <div style={{ gap: "0.5rem" }}>
              <div className='d-flex justify-content-between'>
                <span style={{ fontSize: "0.95rem", gap: "0.5rem" }}>Created on:</span>
                <span style={{ fontSize: "0.95rem", gap: "0.5rem" }}>Due By:</span>
              </div>
              <div className='d-flex justify-content-between'>
                <span style={{ fontSize: "0.95rem" }}>{formatDateTime(created_on, DATE_CONVERSION_TYPE.DATE)}</span>
                {
                  due_date ?
                    (<span>{formatDateTime(due_date, DATE_CONVERSION_TYPE.DATE)}</span>) :
                    (<span>N.A.</span>)
                }
              </div>
              <div className='d-flex justify-content-between'>
                <span>{formatDateTime(created_on, DATE_CONVERSION_TYPE.TIME)}</span>
                {
                  due_date ?
                    (<span>{formatDateTime(due_date, DATE_CONVERSION_TYPE.TIME)}</span>) :
                    (<span></span>)
                }
              </div>
            </div>
            <div className='description justify-content-center'>
              <p className='text-center'>{message}</p>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <span>Assigned to:</span>
              <span>{assigned_name}</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default TaskItem
