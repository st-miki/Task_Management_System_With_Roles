import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
import axios from 'axios';

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`/api/tasks/${id}`);
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <Descriptions layout="vertical">
        <Descriptions.Item label="Description">{task.description}</Descriptions.Item>
        <Descriptions.Item label="Status">{task.status}</Descriptions.Item>
        <Descriptions.Item label="Due Date">{task.dueDate}</Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default TaskDetails;
