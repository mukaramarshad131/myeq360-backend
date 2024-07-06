import { useQuery } from '@tanstack/react-query';
import { Button, Card, Col, Form, Input, Popconfirm, Row, Select, Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';

import orgService from '@/api/services/orgService';
import { IconButton, Iconify } from '@/components/icon';
import ProTag from '@/theme/antd/components/tag';

import EQModal from '../../../components/eq-modal';

import { Organization } from '#/entity';

type SearchFormFieldType = Pick<Organization, 'name' | 'status'>;
type ModalProps = {
  formValue: Organization;
  title: string;
  show: boolean;
  onOk: VoidFunction;
  onCancel: VoidFunction;
};
export default function TableWithFilter() {
  const [searchForm] = Form.useForm();
  const [modalPros, setModalProps] = useState<ModalProps>({
    formValue: {
      id: '',
      name: '',
      status: 'enable',
    },
    title: 'New',
    show: false,
    onOk: () => {
      setModalProps((prev: any) => ({ ...prev, show: false }));
    },
    onCancel: () => {
      setModalProps((prev: any) => ({ ...prev, show: false }));
    },
  });

  const columns: ColumnsType<Organization> = [
    { title: 'Name', dataIndex: 'name', width: 300 },
    { title: 'Order', dataIndex: 'order', align: 'center', width: 60 },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      width: 120,
      render: (status) => (
        <ProTag color={status === 'enable' ? 'success' : 'error'}>{status}</ProTag>
      ),
    },
    { title: 'Desc', dataIndex: 'desc', align: 'center', width: 300 },
    {
      title: 'Action',
      key: 'operation',
      align: 'center',
      width: 100,
      render: (_, record) => (
        <div className="flex w-full justify-center text-gray">
          <IconButton onClick={() => onEdit(record)}>
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm title="Delete the Organization" okText="Yes" cancelText="No" placement="left">
            <IconButton>
              <Iconify icon="mingcute:delete-2-fill" size={18} className="text-error" />
            </IconButton>
          </Popconfirm>
        </div>
      ),
    },
  ];

  // rowSelection objects indicates the need for row selection
  const rowSelection: TableRowSelection<Organization> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const { data } = useQuery({
    queryKey: ['orgs'],
    queryFn: orgService.getOrgList,
  });

  const onSearchFormReset = () => {
    searchForm.resetFields();
  };

  const onCreate = () => {
    setModalProps((prev: any) => ({
      ...prev,
      show: true,
      title: 'Create New',
      formValue: {
        ...prev.formValue,
        id: '',
        name: '',
        order: 1,
        desc: '',
        status: 'enable',
      },
    }));
  };

  const onEdit = (formValue: Organization) => {
    setModalProps((prev: any) => ({
      ...prev,
      show: true,
      title: 'Edit',
      formValue,
    }));
  };

  return (
    <Space direction="vertical" size="large" className="w-full">
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

      <Card
        title="Organization List"
        extra={
          <Button type="primary" onClick={onCreate}>
            New
          </Button>
        }
      >
        <Table
          rowKey="id"
          size="small"
          scroll={{ x: 'max-content' }}
          pagination={false}
          columns={columns}
          dataSource={data}
          rowSelection={{ ...rowSelection }}
        />
      </Card>
      <EQModal {...modalPros} />
    </Space>
  );
}
