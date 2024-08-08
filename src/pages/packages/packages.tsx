import { Tabs } from 'antd';
import { useState } from 'react';

import BusinessLicense from '@/components/business-professional/BusinessLicense';
import BusinessPackages from '@/components/business-professional/BusinessPackages';
import CoachLicense from '@/components/coach-client/CoachLicense';
import CoachPackages from '@/components/coach-client/CoachPackages';
import TabsButton from '@/pages/sys/others/TabsButton';

export default function Packages() {
  const [filter, setFilter] = useState<any>({
    license: true,
    packages: true,
    coachpackages: true,
    coachlicense: true,
  });
  const handleFilter = (value: string) => {
    const newFilter = { ...filter, [value]: !filter[value] } as any;
    setFilter(newFilter);
  };

  const tabsData = [
    {
      key: '1',
      label: 'Business and Business Professionals',
      children: (
        <>
          <div
            style={{
              marginBottom: '20px',
            }}
            className="flex flex-row gap-4 max-md:flex-col"
          >
            <TabsButton value="1" handleFilter={handleFilter} filter={filter} />
          </div>

          <div>
            {filter?.packages && <BusinessPackages />}
            {filter?.license && <BusinessLicense />}
          </div>
        </>
      ),
    },
    {
      key: '2',
      label: 'Coach and Clients',
      children: (
        <>
          <div
            style={{
              marginBottom: '20px',
            }}
            className="flex flex-row gap-4 max-md:flex-col"
          >
            <TabsButton value="2" handleFilter={handleFilter} filter={filter} />
          </div>

          <div>
            {filter?.coachpackages && <CoachPackages />}
            {filter?.coachlicense && <CoachLicense />}
          </div>
        </>
      ),
    },
    {
      key: '3',
      label: 'Educational Institutions and Educators',
      children: (
        <>
          <div
            style={{
              marginBottom: '20px',
            }}
            className="flex flex-row gap-4 max-md:flex-col"
          >
            <TabsButton value="3" handleFilter={handleFilter} filter={filter} />
          </div>

          <div>
            {filter?.packages && <BusinessPackages />}
            {filter?.license && <BusinessLicense />}
          </div>
        </>
      ),
    },
  ];

  const onChange = (e: any) => {};

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="flex flex-col gap-7">
        <h1 className="p-5 text-3xl font-semibold text-[#0092B3]">Select Account Type</h1>
        <Tabs defaultActiveKey="1" items={tabsData} onChange={onChange} />
      </div>
    </div>
  );
}
