import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';

import Card from '@/components/card';

import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Select Account Type',
  },
  {
    key: '2',
    label: 'Business and Business Professionals',
    children: [
      {
        key: '2-1',
        label: 'Business Packages',
      },
      {
        key: '2-2',
        label: 'Business Professionals & Teams',
      },
    ],
  },
  {
    key: '3',
    label: 'Educational Institutions and Educators',
    children: [
      {
        key: '2-1',
        label: 'Educator ',
      },
      {
        key: '2-2',
        label: 'Principal',
      },
      {
        key: '2-3',
        label: 'District Staff',
      },
      {
        key: '2-4',
        label: 'School Packages',
      },
    ],
  },
  {
    key: '4',
    label: 'Coach and Clients',
    children: [
      {
        key: '3-1',
        label: 'Coach',
      },
      {
        key: '3-2',
        label: 'Coach Packages',
      },
    ],
  },
];

export default function Packages() {
  return (
    <Card>
      <div className="flex flex-col gap-7">
        <Typography.Title level={2} style={{ color: '#469E76' }}>
          Upgrade Your Account
        </Typography.Title>

        <Card className="mb-64 flex flex-col">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Typography.Title level={4} style={{ color: '#469E76' }}>
                  Choose Packages to create your Team
                </Typography.Title>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Card>
      </div>
    </Card>
  );
}
