import React from 'react';
import { Layout, Card, Row, Col, Statistic, Avatar } from 'antd';
import { UserOutlined, CheckCircleOutlined, ScheduleOutlined, SolutionOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  return (
    <Content style={{ padding: '0 50px' }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Total Tasks"
                  value={15}  // Example value, replace it with the actual count
                  prefix={<SolutionOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Completed Tasks"
                  value={8}  // Example value, replace it with the actual count
                  prefix={<CheckCircleOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Tasks to be Completed"
                  value={7}  // Example value, replace it with the actual count
                  prefix={<ScheduleOutlined />}
                />
              </Card>
            </Col>
          </Row>
          {/* Add other components or sections as needed */}
        </Content>
  );
};

export default Dashboard;
