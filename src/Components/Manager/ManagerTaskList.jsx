import React, { useState } from 'react';
import { List, Card, Button, Modal, Form, Input, DatePicker } from 'antd';
import { Link } from 'react-router-dom';

const dummyTeams = [
  { id:   1, name: 'Team Alpha' },
  { id:   2, name: 'Team Beta' },
  { id:   3, name: 'Team Gamma' },
];

const dummyTasks = [
  { id:   1, title: 'Picking up stones', assignedBy: 'Yonathan', assignedTo: 'Shimeles', dueDate: '2024-03-01' },
  { id:   2, title: 'Making lunch', assignedBy: 'Sebsebe', assignedTo: 'Saba', dueDate: '2024-03-02' },
  { id:   3, title: 'Cleaning the house', assignedBy: 'Simba', assignedTo: 'Mufasa', dueDate: '2024-03-03' },
];

const TeamCard = ({ team, onSelect }) => (
  <Card style={{ width:  240, marginBottom:  20, cursor: 'pointer' }} onClick={() => onSelect(team)}>
    <Card.Meta title={team.name} />
  </Card>
);

const ManagerTaskList = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
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
      setTasks([...tasks, values]);
    }
    setIsModalVisible(false);
  };

  return (
    <div>
      <h2>Select a Team</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {dummyTeams.map(team => (
          <TeamCard key={team.id} team={team} onSelect={setSelectedTeam} />
        ))}
      </div>
      {selectedTeam && (
        <div>
          <h2 style={{color:'black'}}>Tasks for {selectedTeam.name}</h2>
          <Button type="primary" onClick={() => showModal(null)}>
            Add Task
          </Button>
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
                  description={`Assigned By: ${task.assignedBy} | Assigned To: ${task.assignedTo || 'Unassigned'}`}
                />
              </List.Item>
            )}
          />
          <Modal title={selectedTask ? "Edit Task" : "Add Task"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
      )}
    </div>
  );
};

export default ManagerTaskList;
