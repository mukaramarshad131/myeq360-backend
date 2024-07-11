import { CrownOutlined, DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Typography } from 'antd';

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
        <div className="flex flex-row items-center gap-3">
          <Typography.Title level={2} style={{ color: '#469E76' }}>
            Upgrade Your Account
          </Typography.Title>

          <Dropdown menu={{ items }} placement="bottom">
            <div onClick={(e) => e.preventDefault()}>
              <Space>
                <Typography.Title level={4} style={{ color: '#469E76' }}>
                  Choose Packages to create your Team
                </Typography.Title>
                <DownOutlined style={{ color: 'green', fontSize: 20 }} />
              </Space>
            </div>
          </Dropdown>
        </div>
        <Badge.Ribbon text="Sale (15% off)" color="red" style={{ insetInlineEnd: '380px' }}>
          <Card style={{ padding: '0px', height: '400px', width: '300px' }}>
            <div
              style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
              className="flex h-[35%] w-full flex-col bg-[#F9D039] px-5 text-center"
            >
              <CrownOutlined style={{ fontSize: 50 }} />
              <span className="text-xl"> Gold Business Package</span>

              <span>
                <del>$234:00</del> -$234:00
              </span>
            </div>

            <div
              style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
              className="h-[65%] bg-gray-300"
            >
              text part
            </div>
          </Card>
        </Badge.Ribbon>
      </div>
    </Card>
  );
}
