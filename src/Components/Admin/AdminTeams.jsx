import React, { useState } from 'react';
import { Card, Avatar, Button, Modal, Select } from 'antd';

const { Meta } = Card;
const { Option } = Select;

const AdminTeams = () => {
  // Adding a third dummy team to the initial state
  const [teamsData, setTeamsData] = useState([
    {
      id:  1,
      name: 'Team A',
      manager: 'John Doe',
      members: ['Alice', 'Bob', 'Charlie'],
    },
    {
      id:  2,
      name: 'Team B',
      manager: 'Jane Smith',
      members: ['David', 'Emma', 'Frank'],
    },
    {
      id:  3,
      name: 'Team C',
      manager: 'Jack Johnson',
      members: ['Grace', 'Hank', 'Ivan'],
    },
  ]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (teamId) => {
    setSelectedTeam(teamId);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (selectedTeam && selectedManager) {
      const updatedTeamsData = teamsData.map(team => {
        if (team.id === selectedTeam) {
          return {
            ...team,
            manager: selectedManager,
          };
        }
        return team;
      });
      setTeamsData(updatedTeamsData);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const assignManager = (teamId, managerName) => {
    showModal(teamId);
  };

  const demoteManager = (teamId) => {
    const updatedTeamsData = teamsData.map(team => {
      if (team.id === teamId) {
        return {
          ...team,
          manager: null,
        };
      }
      return team;
    });
    setTeamsData(updatedTeamsData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {teamsData.map(team => (
        <Card key={team.id} style={{ width:  300, marginBottom:  20 }}>
          <Meta
            title={team.name}
            description={
              <div>
                <p>Manager: <span style={{ fontWeight: 'bold', color: '#00cccc' }}>{team.manager}</span></p>
                <p>Members:</p>
                {team.members.map(member => (
                  <p key={member}>
                    <Avatar style={{ backgroundColor: '#87d068', marginRight:  8 }}>{member[0]}</Avatar>
                    {member}
                  </p>
                ))}
              </div>
            }
          />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type="primary" onClick={() => assignManager(team.id, 'New Manager')}>
              Assign Manager
            </Button>
            <Button onClick={() => demoteManager(team.id)}>Demote Manager</Button>
          </div>
        </Card>
      ))}
      {selectedTeam && (
        <Modal
          title="Change Manager"
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Select new manager:</p>
          <Select style={{ width: '100%' }} onChange={value => setSelectedManager(value)}>
            {teamsData[selectedTeam -  1].members.map(member => (
              <Option key={member} value={member}>{member}</Option>
            ))}
          </Select>
        </Modal>
      )}
    </div>
  );
};

export default AdminTeams;
