import { Button, Card, Space } from 'antd';
import Table from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';

import CustomModal from '../custom-modal';

import TableFilter from './tableFilter';

import { Organization, TableInterface } from '#/entity';

export default function TableWithFilter({
  showFilter,
  title,
  addModal,
  pagination,
  dataSource,
  column,
  modalBtnTitle,
  modalChildren,
  modalTitle,
}: TableInterface) {
  const [showModal, setShowModal] = useState(false);

  const rowSelection: TableRowSelection<Organization> = {
    onChange: (selectedRowKeys, selectedRows) => {},
    onSelect: (record, selected, selectedRows) => {},
    onSelectAll: (selected, selectedRows, changeRows) => {},
  };

  return (
    <Space direction="vertical" size="large" className="w-full">
      {showFilter && <TableFilter />}

      <Card
        title={title || 'Result'}
        extra={
          addModal && (
            <Button type="primary" onClick={() => setShowModal(true)}>
              {modalBtnTitle || 'New'}
            </Button>
          )
        }
      >
        <Table
          rowKey="id"
          size="small"
          scroll={{ x: 'max-content' }}
          pagination={pagination}
          columns={column}
          dataSource={dataSource}
          rowSelection={{ ...rowSelection }}
        />
      </Card>
      <CustomModal
        title={modalTitle || 'Add New'}
        onCancel={() => setShowModal(false)}
        show={showModal}
        onSubmit={() => {}}
      >
        {modalChildren}
      </CustomModal>
    </Space>
  );
}
