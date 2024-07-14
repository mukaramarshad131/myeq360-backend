import glass_bag from '@/assets/images/glass/ic_glass_bag.png';
import glass_buy from '@/assets/images/glass/ic_glass_buy.png';
import glass_message from '@/assets/images/glass/ic_glass_message.png';
import glass_users from '@/assets/images/glass/ic_glass_users.png';
import { useThemeToken } from '@/theme/hooks';

export const IndStats = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      cover: glass_bag,
      title: 'Understanding Emotions',
      des: ' Gain insight into emotions for better self-awareness and decision-making.',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 2,
      cover: glass_users,
      title: 'Personal Growth',
      des: ' Develop resilience and adaptability to thrive in various life situations.',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
    {
      id: 3,
      cover: glass_buy,
      title: 'Effective Communication',
      des: ' Enhance interpersonal skills for clearer and more meaningful interactions.',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 4,
      cover: glass_message,
      title: 'Positive Relationships',
      des: ' Promote supportive environments and teamwork for greater success.',
      bg: theme.colorErrorTextActive,
      bg_toString_color: theme.colorErrorActive,
      color: theme.colorError,
    },
  ];
};

export const IndFaqData: any[] = [
  {
    id: 1,
    Q: 'q1',
    Ans: 'a1',
    bg: '#CCEBE1',
    color: '#008059',
  },
  {
    id: 2,
    Q: 'q2',
    Ans: 'a2',
    bg: '#CCF0F7',
    color: '#08979C',
  },
  {
    id: 3,
    Q: 'q3',
    Ans: 'a3',
    bg: '#CCEBE1',
    color: '#008059',
  },
  {
    id: 4,
    Q: 'q4',
    Ans: 'a4',
    bg: '#CCF0F7',
    color: '#08979C',
  },
  {
    id: 5,
    Q: 'q5',
    Ans: 'a5',
    bg: '#CCEBE1',
    color: '#008059',
  },
];

export const pkjCard: any[] = [
  {
    id: 1,
    saletext: '30% Off',
    bg: '#A2D6E3',
    pkjName: 'Diamond Business Package',
    PkjActualPrice: '$2,050.00',
    PkjDistPrice: '$1,537.50',
    pkjdesc:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. In which you could able to get 25% off on these products if you buy in bulk',
    executive: '1',
    manager: '10',
    staff: '100',
    exelicenseActualPrice: '$100:00',
    exelicenseDiscPrice: '$75:00',
    managerLicenseActualPrice: '$75:00',
    managerLicenseDiscPrice: '$56.20',
    stafLicenseActualPrice: '$30:00',
    stafLicenseDiscPrice: '$22:00',
  },
  {
    id: 2,
    saletext: '25% Off',
    bg: '#BDC1E2',
    pkjName: 'Platinum Business Package',
    PkjActualPrice: '$2,050.000',
    PkjDistPrice: '$1,537.50',
    pkjdesc:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. In which you could able to get 25% off on these products if you buy in bulk',
    executive: '1',
    manager: '6',
    staff: '50',
    exelicenseActualPrice: '$100:00',
    exelicenseDiscPrice: '$75:00',
    managerLicenseActualPrice: '$75:00',
    managerLicenseDiscPrice: '$56.20',
    stafLicenseActualPrice: '$30:00',
    stafLicenseDiscPrice: '$22:00',
  },
  {
    id: 3,
    saletext: '15% Off',
    bg: '#FFB4AB',
    pkjName: 'Premium Business Package',
    PkjActualPrice: '$2,050.000',
    PkjDistPrice: '$1,537.50',
    pkjdesc:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. In which you could able to get 25% off on these products if you buy in bulk',
    executive: '1',
    manager: '5',
    staff: '80',
    exelicenseActualPrice: '$100:00',
    exelicenseDiscPrice: '$75:00',
    managerLicenseActualPrice: '$75:00',
    managerLicenseDiscPrice: '$56.20',
    stafLicenseActualPrice: '$30:00',
    stafLicenseDiscPrice: '$22:00',
  },
  {
    id: 4,
    saletext: '20% Off',
    bg: '#F9D44C',
    pkjName: 'Gold Business Package',
    PkjActualPrice: '$2,050000.00',
    PkjDistPrice: '$1,537.50',
    pkjdesc:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. In which you could able to get 25% off on these products if you buy in bulk',
    executive: '1',
    manager: '6',
    staff: '50',
    exelicenseActualPrice: '$100:00',
    exelicenseDiscPrice: '$75:00',
    managerLicenseActualPrice: '$75:00',
    managerLicenseDiscPrice: '$56.20',
    stafLicenseActualPrice: '$30:00',
    stafLicenseDiscPrice: '$22:00',
  },
  {
    id: 5,
    saletext: '25% Off',
    bg: '#77518C',
    pkjName: 'Bronze Business Package',
    PkjActualPrice: '$2,050.00',
    PkjDistPrice: '$1,537.50',
    pkjdesc:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. In which you could able to get 25% off on these products if you buy in bulk',
    executive: '1',
    manager: '6',
    staff: '50',
    exelicenseActualPrice: '$100:00',
    exelicenseDiscPrice: '$75:00',
    managerLicenseActualPrice: '$75:00',
    managerLicenseDiscPrice: '$56.20',
    stafLicenseActualPrice: '$30:00',
    stafLicenseDiscPrice: '$22:00',
  },
  {
    id: 6,
    saletext: '15% Off',
    bg: '#CACE91',
    pkjName: 'Silver Business Package',
    PkjActualPrice: '$2,050.00',
    PkjDistPrice: '$1,537.50',
    pkjdesc:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. In which you could able to get 25% off on these products if you buy in bulk',
    executive: '1',
    manager: '6',
    staff: '50',
    exelicenseActualPrice: '$100:00',
    exelicenseDiscPrice: '$75:00',
    managerLicenseActualPrice: '$75:00',
    managerLicenseDiscPrice: '$56.20',
    stafLicenseActualPrice: '$30:00',
    stafLicenseDiscPrice: '$22:00',
  },
] as any;

export const businessLicense: any[] = [
  {
    id: 1,
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 2,
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 3,
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 4,
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 5,
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 6,
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
] as any;
