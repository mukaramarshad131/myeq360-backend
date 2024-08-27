import { InfoCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Tooltip } from 'antd';

import cartImg from '@/assets/images/packages/cart-img.png';
import Card from '@/components/card';
import IndStatCard from '@/pages/dashboard/individual-dashboard/IndStatCards';

const { Option } = Select;

const text = (
  <span style={{ color: 'black' }}>
    Enter the coupon code at checkout to receive your discount. Make sure the discount is applied
    before you complete your purchase.
  </span>
);

function AddToCart() {
  const handleFinish = () => {};

  return (
    <Row gutter={16}>
      <Col lg={14} md={24} sm={24} className="">
        <div className="bg-white mx-auto max-w-lg rounded-lg p-4">
          <h2 className="mb-4 text-xl font-bold">User Details</h2>
          <Form layout="vertical" onFinish={handleFinish}>
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Company name (optional)" name="companyName">
              <Input />
            </Form.Item>

            <Form.Item
              label="Country / Region"
              name="country"
              rules={[{ required: true, message: 'Please select your country or region' }]}
            >
              <Select placeholder="Select a country / region…">
                <Option value="United States">United States</Option>
                <Option value="Algeria">Algeria</Option>
                <Option value="American Samoa">American Samoa</Option>
                <Option value="Canada">Canada</Option>
                <Option value="Argentina">Argentina</Option>
                <Option value="Armenia">Armenia</Option>
                <Option value="Aruba">Aruba</Option>
                <Option value="Australia">Australia</Option>
                <Option value="Austria">Austria</Option>
                <Option value="California">California</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="ZIP Code"
              name="zipCode"
              rules={[{ required: true, message: 'Please enter your ZIP Code' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email address"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email address', type: 'email' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="User Type"
              name="userType"
              rules={[{ required: true, message: 'Please select your user type' }]}
            >
              <Select placeholder="Select User Type">
                <Option value="Corporate EXECUTIVE">Corporate EXECUTIVE</Option>
                <Option value="Corporate MANAGER">Corporate MANAGER</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Order notes (optional)" name="orderNotes">
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full rounded">
                Check out
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>

      <Col lg={10} md={24} sm={24}>
        <Card className="flex flex-col gap-3">
          <Card className=" flex w-full flex-col" style={{ boxShadow: 'none' }}>
            <h1 className="mb-5 w-full text-left text-xl font-bold">Cart Items</h1>
            <Row className="w-full py-4">
              {/* First Row: Labels */}
              <Row className="w-full">
                <Col span={6} className="text-center">
                  <p className="font-bold">Product</p>
                </Col>
                <Col span={6} className="text-center">
                  <p className="font-bold">Price</p>
                </Col>
                <Col span={6} className="text-center">
                  <p className="font-bold">Quantity</p>
                </Col>
                <Col span={6} className="text-center">
                  <p className="font-bold">Total Price</p>
                </Col>
              </Row>

              {/* Second Row: Values */}
              <Row className="w-full items-center ">
                <Col span={6} className=" text-center">
                  <img src={cartImg} alt="Product" className="mx-auto" style={{ width: 210 }} />
                </Col>
                <Col span={6} className="text-center">
                  <p>$20.50</p>
                </Col>
                <Col span={6} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="rounded border p-1">
                      <MinusOutlined />
                    </button>
                    <p>2</p>
                    <button className="rounded border p-1">
                      <PlusOutlined />
                    </button>
                  </div>
                </Col>
                <Col span={6} className="text-center">
                  <p className="text-orange-500 text-orange">$41.00</p>
                </Col>
              </Row>
              <Row className="w-full items-center">
                <Col span={6} className="text-center">
                  <img src={cartImg} alt="Product" className="mx-auto" style={{ width: 210 }} />
                </Col>
                <Col span={6} className="text-center">
                  <p>$20.50</p>
                </Col>
                <Col span={6} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="rounded border p-1">
                      <MinusOutlined />
                    </button>
                    <p>2</p>
                    <button className="rounded border p-1">
                      <PlusOutlined />
                    </button>
                  </div>
                </Col>
                <Col span={6} className="text-center">
                  <p className="text-orange-500 text-orange">$41.00</p>
                </Col>
              </Row>
            </Row>
          </Card>{' '}
          <div className="mb-2 flex w-full flex-col gap-3 ">
            <div className="relative flex w-full flex-row gap-1">
              <Tooltip placement="top" title={text} color="white">
                <InfoCircleOutlined style={{ fontSize: 15, color: 'green' }} />
              </Tooltip>

              <p className="text-center text-base font-bold">Have a Coupon ?</p>
            </div>

            <div className="flex flex-row justify-between gap-3">
              <Input
                className="inline-block"
                style={{
                  borderRadius: '20px',
                  width: '70%',
                  margin: 'auto',
                }}
                type="text"
                placeholder="Coupon Code..."
              />
              <Button
                type="primary"
                className="m-auto inline-block w-[25%]"
                style={{ background: 'buttonBlue', borderRadius: '20px' }}
              >
                Apply
              </Button>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#D9D9D9]" />
          <Card
            className="mt-7 flex w-[80%] flex-col rounded-lg bg-[#ffd28d] p-5 py-7"
            style={{ alignItems: 'start' }}
          >
            <p className="text-base font-bold">Order Summary</p>
            <div className=" w-full">
              <div className="flex  flex-row justify-between">
                {' '}
                <p className=" font-semibold">Cart Subtotal</p>
                <span className="font-bold">$71.5</span>
              </div>{' '}
              <div className="flex flex-row justify-between ">
                {' '}
                <p className=" font-semibold">Discount</p>
                <span className="font-bold">$71.5</span>
              </div>{' '}
              <div className="flex flex-row justify-between">
                {' '}
                <p className=" font-semibold">Cart Total</p>
                <span className="font-bold">$71.5</span>
              </div>
            </div>
            <Button
              type="primary"
              className="mt-4 w-full"
              style={{ background: '#3B4970', borderRadius: '20px' }}
            >
              Proceed To Checkout
            </Button>
          </Card>
          <Button
            type="primary"
            className="mt-4 w-[80%] text-center "
            style={{ background: '#FFC439', borderRadius: '20px', fontSize: 15 }}
          >
            PayPal
          </Button>{' '}
          <Button
            type="primary"
            className="mt-1 w-[80%] text-center"
            style={{ background: '#008CFF', borderRadius: '20px', fontSize: 15 }}
          >
            Venmo
          </Button>{' '}
          <Button
            type="primary"
            className="mt-1 w-[80%] text-center"
            style={{ background: 'black', borderRadius: '20px', fontSize: 15 }}
          >
            Debit or Credit Card
          </Button>
        </Card>
      </Col>
      <div className="mt-10">
        <p className="text-2xl font-semibold">Related Products</p>
        <IndStatCard />
      </div>
    </Row>
  );
}

export default AddToCart;
