import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  return (
    <>
      <Row lg={3} md={2} sm={1} className="g-3 mb-4">
        {tasks.map(task => (
          <Col key={task.id}>
            <TaskItem
              id={task.id}
              assigned_name={task.assigned_name}
              assigned_to={task.assigned_to}
              message={task.message}
              created_on={task.created_on}
              due_date={task.due_date}
              priority={task.priority}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default TaskList
