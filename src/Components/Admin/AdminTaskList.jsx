import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, Button, Modal, Form, Input, DatePicker } from 'antd';

// Dummy tasks data
const dummyTasks = [
  {  
    id:  1,  
    title: 'Picking up stones',  
    assignedBy: 'Yonathan',  
    assignedTo: 'Shimeles',  
    dueDate: '2024-03-01',
    assignedDate: '2024-03-01', // Day of assignation
    deadline: '2024-03-01' // Deadline
  },
  {  
    id:  2,  
    title: 'Making lunch',  
    assignedBy: 'Sebsebe',  
    assignedTo: 'Saba',  
    dueDate: '2024-03-02',
    assignedDate: '2024-03-02', // Day of assignation
    deadline: '2024-03-02' // Deadline
  },
  {  
    id:  3,  
    title: 'Cleaning the house',  
    assignedBy: 'Simba',  
    assignedTo: 'Mufasa',  
    dueDate: '2024-03-03',
    assignedDate: '2024-03-03', // Day of assignation
    deadline: '2024-03-03' // Deadline
  },
];


function AdminTaskList() {
  const [tasks, setTasks] = useState(dummyTasks);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const showModal = (task) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    if (selectedTask) {
      // Update the task in the tasks list
      setTasks(tasks.map(task => task.id === selectedTask.id ? { ...task, ...values } : task));
    } else {
      // Add a new task to the tasks list
      // For example, setTasks([...tasks, values]);
    }
    setIsModalVisible(false);
  };

  return (
    <div style={{backgroundColor: 'rgba(245,  245,  245,  0.1)', borderRadius: '10px', padding: '20px', border: '1px dotted #5B00A5'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:   10 }}>
        <h2 style={{color:'#5B00A5'}}>Task List</h2>
        <Button type="primary" onClick={() => showModal(null)}>
          Give a Task
        </Button>
      </div>
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => showModal(task)}>Edit</Button>,
              <span style={{ color: 'red' }}>Delete</span>
            ]}
          >
            <List.Item.Meta
                title={<Link to={`/task/${task.id}`}>{task.title}</Link>}
                description={`
                  Assigned By: ${task.assignedBy} |  
                  Assigned To: ${task.assignedTo || 'Unassigned'} |  
                  Day of Assignation: ${task.dayOfAssignation || 'N/A'} |  
                  Deadline: ${task.dueDate || 'N/A'}
                `}
            />

          </List.Item>
        )}
      />
      <Modal title={selectedTask ? "Edit Task" : "Give a Task"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form onFinish={onFinish} initialValues={selectedTask}>
          <Form.Item name="title" label="Task Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="assignedTo" label="Assigned To" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminTaskList;
