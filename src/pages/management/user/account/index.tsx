import { Tabs, TabsProps } from 'antd';

import { Iconify } from '@/components/icon';

import GeneralTab from './general-tab';
import SecurityTab from './security-tab';

function UserAccount() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex items-center">
          <Iconify icon="solar:user-id-bold" size={24} className="mr-2" />
          <span>General</span>
        </div>
      ),
      children: <GeneralTab />,
    },
    {
      key: '2',
      label: (
        <div className="flex items-center">
          <Iconify icon="solar:key-minimalistic-square-3-bold-duotone" size={24} className="mr-2" />
          <span>Security</span>
        </div>
      ),
      children: <SecurityTab />,
    },

    {
      key: '3',
      label: (
        <div className="flex items-center">
          <Iconify icon="mingcute:profile-fill" size={24} className="mr-2" />
          <span>Orders </span>
        </div>
      ),
      children: (
        <div className="mt-52 text-center text-5xl font-bold text-themeGreen">Stay Tuned</div>
      ),
    },
    {
      key: '4',
      label: (
        <div className="flex items-center">
          <Iconify icon="mingcute:profile-fill" size={24} className="mr-2" />
          <span>Downloads </span>
        </div>
      ),
      children: (
        <div className="mt-52 text-center text-5xl font-bold text-themeGreen">Stay Tuned</div>
      ),
    },
    {
      key: '5',
      label: (
        <div className="flex items-center">
          <Iconify icon="mingcute:profile-fill" size={24} className="mr-2" />
          <span>Payment Methods </span>
        </div>
      ),
      children: (
        <div className="mt-52 text-center text-5xl font-bold text-themeGreen">Stay Tuned</div>
      ),
    },
    {
      key: '6',
      label: (
        <div className="flex items-center">
          <Iconify icon="mingcute:profile-fill" size={24} className="mr-2" />
          <span>Addresses</span>
        </div>
      ),
      children: (
        <div className="mt-52 text-center text-5xl font-bold text-themeGreen">Stay Tuned</div>
      ),
    },
    {
      key: '7',
      label: (
        <div className="flex items-center">
          <Iconify icon="mingcute:profile-fill" size={24} className="mr-2" />
          <span>Delete Account</span>
        </div>
      ),
      children: (
        <div className="mt-52 text-center text-5xl font-bold text-themeGreen">Stay Tuned</div>
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
}

export default UserAccount;
