import React, { useState } from 'react';
import { Card, Button, Modal, Input, message } from 'antd';
import { EditOutlined, UserAddOutlined, UserDeleteOutlined, MessageOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ManagerTeams = ({ teamsData }) => {
  const [isMemberModalVisible, setIsMemberModalVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [newMemberName, setNewMemberName] = useState('');

  const showMemberModal = (teamId) => {
    setCurrentTeam(teamsData.find(team => team.id === teamId));
    setIsMemberModalVisible(true);
  };

  const handleMemberModalOk = () => {
    // Add member logic here
    setIsMemberModalVisible(false);
  };

  const handleMemberModalCancel = () => {
    setIsMemberModalVisible(false);
  };

  const handleAddMember = () => {
    if (newMemberName) {
      // Placeholder implementation: Add logic to add a new member to the team
      setIsMemberModalVisible(false);
      message.success('Member added successfully');
    } else {
      message.error('Please enter a member name');
    }
  };

  const handleDeleteMember = (memberName) => {
    // Placeholder implementation: Add logic to delete a member from the team
    message.success('Member deleted successfully');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {teamsData && teamsData.map(team => (
        <Card key={team.id} style={{ width: 300, marginBottom: 20 }}>
          <Meta title={team.name} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="primary" onClick={() => showMemberModal(team.id)}>
              <UserAddOutlined /> Add/View Members
            </Button>
            <Button onClick={() => {}}>
              <EditOutlined /> Change Team Name
            </Button>
            <Button onClick={() => {}}>
              <MessageOutlined /> View Chat Log
            </Button>
          </div>
        </Card>
      ))}
      {currentTeam && (
        <Modal
          title={`Manage Members for ${currentTeam.name}`}
          open={isMemberModalVisible}
          onOk={handleMemberModalOk}
          onCancel={handleMemberModalCancel}
          footer={[
            <Button key="add" type="primary" onClick={handleAddMember}>
              Add Member
            </Button>,
            <Button key="cancel" onClick={handleMemberModalCancel}>
              Cancel
            </Button>,
          ]}
        >
          <div>
            {currentTeam.members.map(member => (
              <div key={member}>
                {member} <UserDeleteOutlined onClick={() => handleDeleteMember(member)} />
              </div>
            ))}
          </div>
          <div>
            <Input placeholder="New member name" value={newMemberName} onChange={e => setNewMemberName(e.target.value)} />
            <Button type="primary" onClick={handleAddMember}>Add</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ManagerTeams;
