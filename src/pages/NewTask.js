import React, { useRef, useState } from 'react';
import { DatePicker } from 'antd';
import { Container, Card } from 'react-bootstrap';
import { sendPostRequest } from '../utilities/utils';
import { API_LIST } from '../utilities/constants';

function NewTask() {

  const [priority, setPriority] = useState("-1");
  const [dueDate, setDueDate] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const messageInput = useRef();
  const assigned_toInput = useRef();

  const onChangeDateTime = (value, dateString) => {
    setDueDate(dateString);
  };

  const onOk = (value) => { };

  function onChangePriority(event) {
    setPriority(event.target.value);
  }

  function clearFormData() {
    setPriority("-1");
    setDueDate("");
    messageInput.current.value = '';
    assigned_toInput.current.value = '';
  }

  async function addTask(taskData) {

    const url = process.env.REACT_APP_BASE_URL + API_LIST.CREATE_TASK;
    const token = process.env.REACT_APP_API_KEY;
    const headers = {
      AuthToken: token
    };

    const data = {
      message: taskData.message,
      due_date: taskData.due_date,
      priority: taskData.selectedPriority,
      assigned_to: taskData.assigned_to
    };

    const options = {
      send_form_data: 1
    };

    const response = await sendPostRequest(url, headers, data, options);

    if (response.status === "success") {
      setSuccess(`Added Succesfully with taskid: ${response.taskid}`);
    } else {
      if (response.status === "error") {
        setError(response.error)
      } else {
        setError("Something went wrong! Please try again");
      }
    }

    setTimeout(() => {
      clearFormData();
      setSuccess(null);
      setError(null);
    }, 3000);
  }

  function submitHandler(event) {
    event.preventDefault();

    const message = messageInput.current.value;
    const due_date = dueDate;
    const selectedPriority = priority;
    const assigned_to = assigned_toInput.current.value;

    const formData = {
      message,
      due_date,
      selectedPriority,
      assigned_to
    }
    addTask(formData);
  }


  return (
    <Container>
      <h1 className='text-center mb-4'>Create New Task</h1>
      <div className='d-flex flex-column m-auto' style={{ width: "70%" }}>
        <Card>
          <Card.Body>
            {success && (<div className="alert alert-success" role="alert">
              {success}
            </div>)
            }
            {error && (<div className="alert alert-danger" role="alert">
              {error}
            </div>)
            }
            <form onSubmit={submitHandler}>
              <div className='mt-3 mb-3'>
                <input className="form-control" type="text" placeholder="Enter Assignee ID" ref={assigned_toInput} />
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
                <textarea className='form-control' required id='message' rows='4' ref={messageInput}></textarea>
              </div>
              <div className='d-flex justify-content-center'>
                <button className='btn btn-sm btn-success'>
                  <div className='d-flex'>
                    <span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <span>
                      Add Task
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default NewTask
