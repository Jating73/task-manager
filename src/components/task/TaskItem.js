import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Button, Card, Modal } from 'react-bootstrap';
import { DATE_CONVERSION_TYPE } from '../../utilities/constants';
import { formatDateTime } from '../../utilities/utils';

function TaskItem({ id, assigned_name, assigned_to, created_on, due_date, message, priority }) {

  const [priorityInput, setPriority] = useState("-1");
  const [dueDate, setDueDate] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function editHandler() {
    console.log("Edit ", id)
    handleShow();
  }

  function deleteHandler() {
    console.log("Delete ", id)
  }

  function updateHandler() {

  }

  const onChangeDateTime = (value, dateString) => {
    setDueDate(dateString);
  };

  const onOk = (value) => { };

  function onChangePriority(event) {
    setPriority(event.target.value);
  }

  return (
    <>
      <Card>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className='mr-2'>#{id}</span>
            <div className='ml-auto'>
              <Button className='rounded-circle' variant='warning' style={{ height: "3rem", width: "3rem", marginRight: "3px" }} onClick={editHandler}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
              </Button>
              <Button className='rounded-circle' variant='danger' style={{ height: "3rem", width: "3rem" }} onClick={deleteHandler}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
              </Button>
            </div>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>#{id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={updateHandler}>
            <div className='mt-3 mb-3'>
              <input className="form-control" type="text" placeholder="Enter Assignee ID" value={assigned_to} />
            </div>
            <div className='mt-3 mb-3'>
              <select className="form-control" onChange={onChangePriority} value={priority}>
                <option value='-1'>Select a value</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <div className='form-row'>
              <DatePicker showTime onChange={onChangeDateTime} onOk={onOk} style={{ width: '100%' }} />
            </div>
            <div className='form-row mt-3 mb-3'>
              <label htmlFor='message'>Message</label>
              <textarea className='form-control' required id='message' rows='4' value={message}></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskItem
