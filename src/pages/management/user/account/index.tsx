import SinglePageReport from '@/components/single-page-report';
import SkillAssessmentResult from '@/components/skill-assessment-result';

function UserAccount() {
  // const items: TabsProps['items'] = [
  //   {
  //     key: '1',
  //     label: (
  //       <div className="flex items-center">
  //         <Iconify icon="solar:user-id-bold" size={24} className="mr-2" />
  //         <span>General</span>
  //       </div>
  //     ),
  //     children: <GeneralTab />,
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <div className="flex items-center">
  //         <Iconify icon="solar:bell-bing-bold-duotone" size={24} className="mr-2" />
  //         <span>Notifications</span>
  //       </div>
  //     ),
  //     children: <NotificationsTab />,
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <div className="flex items-center">
  //         <Iconify icon="solar:key-minimalistic-square-3-bold-duotone" size={24} className="mr-2" />
  //         <span>Security</span>
  //       </div>
  //     ),
  //     children: <SecurityTab />,
  //   },
  // ];

  // return <Tabs defaultActiveKey="1" items={items} />;
  return (
    <>
      <SinglePageReport />
      <SkillAssessmentResult />
    </>
  );
}

export default UserAccount;
