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
