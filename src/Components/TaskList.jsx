import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default TaskList;
