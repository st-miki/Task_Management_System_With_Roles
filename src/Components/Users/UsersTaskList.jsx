import React, { useState } from 'react';
import { List, Button, Popconfirm } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const UsersTaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const markTaskAsCompleted = (index) => {
    const newTasks = [...taskList];
    newTasks[index].completed = true;
    setTaskList(newTasks);
  };

  const markTaskAsNotCompleted = (index) => {
    const newTasks = [...taskList];
    newTasks[index].completed = false;
    setTaskList(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = taskList.filter((_, i) => i !== index);
    setTaskList(newTasks);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0   4px   6px rgba(0,   0,   0,   0.1)' }}>
      <List
        style={{ marginTop: '20px' }}
        bordered
        dataSource={taskList}
        renderItem={(task, index) => (
          <List.Item
            actions={[
              task.completed ? (
                <Popconfirm
                  title="Are you sure you want to mark this task as not completed?"
                  onConfirm={() => markTaskAsNotCompleted(index)}
                  okText="Yes"
                  cancelText="No"
                >
                  <CloseCircleOutlined key="notCompleted" style={{ color: 'orange' }} />
                </Popconfirm>
              ) : (
                <CheckCircleOutlined
                  key="completed"
                  onClick={() => markTaskAsCompleted(index)}
                  style={{ color: 'green' }}
                />
              ),
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={() => deleteTask(index)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined key="delete" style={{ color: 'red' }} />
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta
              title={task.title}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default UsersTaskList;
