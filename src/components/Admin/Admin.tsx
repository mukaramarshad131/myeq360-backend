
import React, { useState } from 'react';
import { Layout, Table, Button, Input, Pagination, Modal, Form } from 'antd';
import { PlusOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { confirm } = Modal;

interface AdminData {
  key: string;
  name: string;
  email: string;
  phone: string;
  state: string;
}

const AdminDashboard: React.FC = () => {
  const [filteredData, setFilteredData] = useState<AdminData[]>([]); // State for filtered data
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 }); // State for pagination
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [form] = Form.useForm(); // Form instance for adding new admin

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      render: (text: string) => <span style={{ color: 'green' }}>{text}</span>,
    },
  ];

  const data: AdminData[] = [
    {
      key: '1',
      name: 'Ahmed',
      email: 'ahmed@gmail.com',
      phone: '0784563211',
      state: 'enable',
    },
    // Add more rows as needed
  ];

  // Function to handle search/filter
  const handleSearch = (value: string) => {
    // Example logic to filter data by name or email
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setPagination({ ...pagination, current: 1 }); // Reset pagination to the first page
  };

  // Pagination change handler
  const handlePaginationChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

  // Function to handle new admin modal visibility
  const handleModalVisibility = (visible: boolean) => {
    setIsModalVisible(visible);
    form.resetFields(); // Reset form fields on modal close/open
  };

  // Function to handle form submission for adding new admin
  const handleAddAdmin = () => {
    form.validateFields().then(values => {
      const newAdmin: AdminData = {
        key: `${data.length + 1}`, // Generate a unique key (in a real app, this might come from backend or UUID)
        ...values,
        state: 'enable', // Set default state
      };
      data.push(newAdmin); // Add new admin to data array
      setFilteredData([...data]); // Update filtered data (if filtered)
      setIsModalVisible(false); // Close modal
    });
  };

  // Confirmation before adding new admin
  const showConfirm = () => {
    confirm({
      title: 'Are you sure you want to add this admin?',
      onOk() {
        handleAddAdmin();
      },
    });
  };

  return (
    <Layout style={{ padding: '20px' }}>
      <Header style={{ background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#FFD700' }}>Admins</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ backgroundColor: '#00c4cc', borderColor: '#00c4cc' }}
          onClick={() => handleModalVisibility(true)}
        >
          New Admin
        </Button>
      </Header>
      <Content style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <Input placeholder="Search" prefix={<SearchOutlined />} onPressEnter={(e) => handleSearch(e.currentTarget.value)} />
          <Button icon={<FilterOutlined />}>Filter</Button>
        </div>
        <Table
          columns={columns}
          dataSource={filteredData.length > 0 ? filteredData : data}
          pagination={false} // Pagination is handled separately below
        />
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{`Viewing ${pagination.pageSize * (pagination.current - 1) + 1} to ${Math.min(pagination.pageSize * pagination.current, filteredData.length > 0 ? filteredData.length : data.length)} of ${filteredData.length > 0 ? filteredData.length : data.length} entries.`}</span>
          <Pagination
            simple
            defaultCurrent={pagination.current}
            total={filteredData.length > 0 ? filteredData.length : data.length}
            onChange={handlePaginationChange}
          />
        </div>
      </Content>

      {/* Modal for adding new admin */}
      <Modal
        title="Add New Admin"
        visible={isModalVisible}
        onCancel={() => handleModalVisibility(false)}
        onOk={showConfirm}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default AdminDashboard;






