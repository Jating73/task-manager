import React, { useRef } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { sendPostRequest } from '../utilities/utils';
import { API_LIST } from '../utilities/constants';

function NewTask() {

  const [priority, setPriority] = useState()

  const messageInput = useRef();
  const due_dateInput = useRef();
  const priorityInput = useRef();
  const assigned_toInput = useRef();

  async function addTask() {
    const url = process.env.REACT_APP_BASE_URL + API_LIST.CREATE_TASK;
    const token = process.env.REACT_APP_API_KEY;
    const headers = {
      AuthToken: token
    };

    const data = {
      message: messageInput,
      due_date: due_dateInput,
      priority: priorityInput,
      assigned_to: assigned_toInput
    };

    const response = await sendPostRequest(url, headers, data);
    if (response.status === "success") {
      return data.tasks;
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Form CLicked")

    const message = messageInput.current.value;
    // const due_date = due_dateInput.current.value;
    const priority = priorityInput.current.value;
    const assigned_to = assigned_toInput.current.value;

    const formData = {
      message,
      // due_date,
      priority,
      assigned_to
    }

    console.log({ formData });


  }


  return (
    <Container>
      <h1 className='text-center mb-4'>Create New Task</h1>
      <div className='d-flex flex-column m-auto' style={{ width: "70%" }}>
        <Card>
          <Card.Body>
            <form onSubmit={submitHandler}>
              <div className='mt-3 mb-3'>
                <input className="form-control" type="text" placeholder="Enter Assignee ID" ref={assigned_toInput} />
              </div>
              <div className='mt-3 mb-3'>
                <label>Priority</label>
                <div className='row mt-3 mb-3'>
                  <div className='col-lg-3 col-md-3 col-sm-1'>
                    <input type="radio" id="priority" name="priority" className="custom-control-input" ref={priorityInput} />
                    <label className="custom-control-label" htmlFor="priority">1</label>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-1'>
                    <input type="radio" id="priority" name="priority" className="custom-control-input" ref={priorityInput} />
                    <label className="custom-control-label" htmlFor="priority">2</label>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-1'>
                    <input type="radio" id="priority" name="priority" className="custom-control-input" ref={priorityInput} />
                    <label className="custom-control-label" htmlFor="priority">3</label>
                  </div>
                </div>
              </div>
              <div className='form-row'>
                date
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
