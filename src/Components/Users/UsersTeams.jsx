// Import necessary dependencies
import React, { useState } from 'react';
import { Card, Button, Modal, List, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, MessageOutlined } from '@ant-design/icons';


const UsersTeams = () => {
  // Dummy team data
  const teams = [
    { id:  1, name: "Team  1", members: ["Member  1", "Member  2"], cover: "https://example.com/team-cover.jpg" },
    { id:  2, name: "Team  2", members: ["Member  3", "Member  4"], cover: "https://example.com/team-cover.jpg" },
    { id:  3, name: "Team  3", members: ["Member  5", "Member  6"], cover: "https://example.com/team-cover.jpg" }
  ];

  // State for modal visibility and current team
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(null);

  // Function to show the modal with team members
  const showModal = (team) => {
    setIsModalVisible(true);
    setCurrentTeam(team);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Function to handle leaving the team
  const handleLeaveTeam = () => {
    Modal.confirm({
      title: 'Confirmation',
      content: 'Are you sure you want to leave this team?',
      onOk() {
        console.log('User has left the team.');
        // Implement logic to leave the team here
      },
      onCancel() {
        console.log('User canceled leaving the team.');
      },
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {teams.map(team => (
        <Card
          key={team.id}
          title={team.name}
          style={{ width:  300, marginBottom:  20 }}
          hoverable // Make cards hoverable
          cover={<img alt="team" src={team.cover} />} // Add a cover image
          className="custom-card" // Apply custom styles
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <UserOutlined style={{ fontSize: '20px' }} onClick={() => showModal(team)} />
            <LogoutOutlined style={{ fontSize: '20px' }} onClick={handleLeaveTeam} />
            <MessageOutlined style={{ fontSize: '20px' }} />
          </div>
        </Card>
      ))}
      <Modal title="Team Members" visible={isModalVisible} onCancel={handleCloseModal} footer={null}>
        <List
          itemLayout="horizontal"
          dataSource={currentTeam?.members}
          renderItem={member => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={member}
              />
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default UsersTeams;
