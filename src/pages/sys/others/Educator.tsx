import { Form, Input, Button } from 'antd';

function Educator() {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <div className="mt-6">
      <h1 className="mb-4 text-center text-3xl">Account Type: District Staff</h1>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Invalid email format!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Educator;
