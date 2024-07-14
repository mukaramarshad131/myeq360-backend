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

export const packageCard: any[] = [
  {
    id: 1,
    discount: '30% Off',
    backgroundColor: '#A2D6E3',
    packageName: 'Diamond Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '10',
    staffLicenses: '100',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 2,
    discount: '25% Off',
    backgroundColor: '#BDC1E2',
    packageName: 'Platinum Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 3,
    discount: '15% Off',
    backgroundColor: '#FFB4AB',
    packageName: 'Premium Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '5',
    staffLicenses: '80',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 4,
    discount: '20% Off',
    backgroundColor: '#F9D44C',
    packageName: 'Gold Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 5,
    discount: '25% Off',
    backgroundColor: '#77518C',
    packageName: 'Bronze Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
  },
  {
    id: 6,
    discount: '15% Off',
    backgroundColor: '#CACE91',
    packageName: 'Silver Business Package',
    originalPrice: '$2,050.00',
    description:
      'EQ360 (Social-Emotional Learning Diagnostic Assessment) Gold Business Package. Get 25% off on bulk purchases.',
    executiveLicenses: '1',
    managerLicenses: '6',
    staffLicenses: '50',
    executiveLicensePrice: '$100.00',
    managerLicensePrice: '$75.00',
    staffLicensePrice: '$30.00',
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
