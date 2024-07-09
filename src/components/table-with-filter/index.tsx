import { Button, Card, Space } from 'antd';
import Table from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';

import EQModal from '../eq-modal';

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
      <EQModal
        title={modalTitle || 'Add New'}
        onCancel={() => setShowModal(false)}
        show={showModal}
        onSubmit={() => {
          console.log('first');
        }}
      >
        {modalChildren}
      </EQModal>
    </Space>
  );
}
