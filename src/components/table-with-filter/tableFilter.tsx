import { Button, Card, Col, Form, Input, Row, Select } from 'antd';

import ProTag from '@/theme/antd/components/tag';

import { Organization } from '#/entity';

type SearchFormFieldType = Pick<Organization, 'name' | 'status'>;
function TableFilter() {
  const onSearchFormReset = () => {
    searchForm.resetFields();
  };
  const [searchForm] = Form.useForm();

  return (
    <Card>
      <Form form={searchForm}>
        <Row gutter={[16, 16]}>
          <Col span={24} lg={6}>
            <Form.Item<SearchFormFieldType> label="Name" name="name" className="!mb-0">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} lg={6}>
            <Form.Item<SearchFormFieldType> label="Status" name="status" className="!mb-0">
              <Select>
                <Select.Option value="enable">
                  <ProTag color="success">Enable</ProTag>
                </Select.Option>
                <Select.Option value="disable">
                  <ProTag color="error">Disable</ProTag>
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24} lg={12}>
            <div className="flex justify-end">
              <Button onClick={onSearchFormReset}>Reset</Button>
              <Button type="primary" className="ml-4">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default TableFilter;
