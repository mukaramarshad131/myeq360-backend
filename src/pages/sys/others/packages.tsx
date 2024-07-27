import { Tabs } from 'antd';
import { useState } from 'react';

import { useThemeToken } from '@/theme/hooks';

import BusinessLicense from './BusinessLicense';
import BusinessPackages from './BusinessPackages';
import TabsButton from './TabsButton';

export default function Packages() {
  const themeToken = useThemeToken();
  // const [showBusinessPackages, setShowBusinessPackages] = useState(true);
  // const [showBusinessLicense, setShowBusinessLicense] = useState(true);

  // const handleShowPackages = () => {
  //   setShowBusinessPackages(true);
  //   setShowBusinessLicense(false);
  // };

  // const handleShowLicense = () => {
  //   setShowBusinessPackages(false);
  //   setShowBusinessLicense(true);
  // };

  const [filter, setFilter] = useState<any>({ license: true, packages: true });
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
            <TabsButton handleFilter={handleFilter} filter={filter} />
          </div>

          <div>
            {/* {showBusinessPackages && <BusinessPackages />}
            {showBusinessLicense && <BusinessLicense />} */}
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
            <TabsButton handleFilter={handleFilter} filter={filter} />
          </div>

          <div>
            {/* {showBusinessPackages && <BusinessPackages />}
          {showBusinessLicense && <BusinessLicense />} */}
            {filter?.packages && <BusinessPackages />}
            {filter?.license && <BusinessLicense />}
          </div>
        </>
      ),
    },
    {
      key: '3',
      label: 'Educational Institutions and Educators',
      children: '',
      // <div style={{ marginBottom: '20px' }}>
      //   <button
      //     style={{
      //       marginRight: '10px',
      //       padding: '8px 16px',
      //       color: '#000',
      //       border: '1px solid #D0D5D9',
      //       borderRadius: '4px',
      //       cursor: 'pointer',
      //     }}
      //   >
      //     Educator
      //   </button>

      //   <button
      //     style={{
      //       marginRight: '10px',
      //       padding: '8px 16px',
      //       color: '#000',
      //       border: '1px solid #D0D5D9',
      //       borderRadius: '4px',
      //       cursor: 'pointer',
      //     }}
      //   >
      //     District Staff
      //   </button>
      //   <button
      //     style={{
      //       marginRight: '10px',
      //       padding: '8px 16px',
      //       color: '#000',
      //       border: '1px solid #D0D5D9',
      //       borderRadius: '4px',
      //       cursor: 'pointer',
      //     }}
      //   >
      //     Principal
      //   </button>
      //   <button
      //     style={{
      //       marginRight: '10px',
      //       padding: '8px 16px',
      //       color: '#000',
      //       border: '1px solid #D0D5D9',
      //       borderRadius: '4px',
      //       cursor: 'pointer',
      //     }}
      //   >
      //     School
      //   </button>
      // </div>
    },
  ];
  console.log('coach and client', tabsData[1]);
  const onChange = (key: any) => {
    // Handle tab change if needed
  };

  return (
    <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="flex flex-col gap-7">
        <h1 className="p-5 text-3xl font-semibold text-[#0092B3]">Select Account Type</h1>
        <Tabs defaultActiveKey="1" items={tabsData} onChange={onChange} />
      </div>
    </div>
  );
}
