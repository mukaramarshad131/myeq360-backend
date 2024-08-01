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

export const buinessPackageLicense: any[] = [
  // Business Packages
  {
    id: 1,
    type: 'packages',
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
    type: 'packages',
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
    type: 'packages',
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
    type: 'packages',
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

  // Licenses
  {
    id: 101,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 102,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 103,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 104,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 105,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
  {
    id: 106,
    type: 'license',
    licenseTitle: 'EQ360 Business EXECUTIVE License',
    licenseDesc:
      'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company. The executive is able to see dashboards of the EQ competencies of each team that they manage and the scores of the members within each team. They have the ability to track both individual and team performance over time and view their areas of growth and areas of EQ that need additional development.',
    licensePrice: '$100.00',
  },
] as any;
export const businessPackages = buinessPackageLicense.filter((item) => item.type === 'packages');
export const businessLicenses = buinessPackageLicense.filter((item) => item.type === 'license');
// export const combinedResults = [...businessPackages, ...businessLicenses];

export const TabsButtonData = {
  '1': [
    {
      id: '1',
      type: 'packages',
      titleButton: 'Business Packages',
      buttonDesc: 'Leaders can create and assess teams, including their own evaluation',
    },
    {
      id: '2',
      type: 'license',
      titleButton: 'Business Professionals & Teams',
      buttonDesc: ' Team members can self-assess or assess their colleagues.',
    },
  ],
  '2': [
    {
      id: '3',
      type: 'packages',
      titleButton: 'Coach Packges',
      buttonDesc: ' Coaches can create and assess groups or individuals.',
    },
    {
      id: '4',
      type: 'license',
      titleButton: 'Coach Packges',
      buttonDesc: ' Clients can self-assess and can also receive reviews from a third party.',
    },
  ],
  '3': [
    {
      id: '5',
      type: 'educator',
      titleButton: 'Educator',
      buttonDesc: 'Assess and review all students in your class/classes',
    },
    {
      id: '6',
      type: 'principal',
      titleButton: 'Principal',
      buttonDesc:
        'Review results of all students within your school (cannot take assessment on students)',
    },
    {
      id: '7',
      type: 'district',
      titleButton: 'District Staff',
      buttonDesc:
        'Review results and assess students or classes created by educator in multiple schools (cannot create classes)',
    },
    {
      id: '8',
      type: 'school',
      titleButton: 'School Package',
      buttonDesc: 'Create in bulk Principal, District Staff, Educator and Student',
    },
  ],
} as any;

export const EqTestInstructions = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      desc: 'Understand and manage emotions',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 2,
      desc: 'Set and achieve positive goals',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
    {
      id: 3,
      desc: ' Feel and show empathy for others',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 4,
      desc: 'Establish and maintain positive relationships',
      bg: theme.colorWarningTextActive,
      bg_toString_color: theme.colorWarningActive,
      color: theme.colorWarning,
    },
    {
      id: 5,
      desc: 'Make responsible decisions',
      bg: theme.colorPrimaryActive,
      bg_toString_color: theme.colorPrimary,
      color: theme.colorPrimaryTextActive,
    },
    {
      id: 6,
      desc: 'Are motivated and stay motivated',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
    },
  ];
};

export const EqTestPreAssessment = () => {
  const theme = useThemeToken();
  return [
    {
      id: 1,
      desc: 'Which language is primarily spoken in your home?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'english', label: 'English' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'chinese', label: 'Chinese' },
        { value: 'french', label: 'French(/Creole)' },
        { value: 'hindi', label: 'Hindi' },
        { value: 'italian', label: 'Italian' },
        { value: 'japanese', label: 'Japanese' },
        { value: 'korean', label: 'Korean' },
        { value: 'polish', label: 'Polish' },
        { value: 'portugese', label: 'Portugese' },
        { value: 'russian', label: 'Russian' },
        { value: 'spanish', label: 'Spanish' },
        { value: 'korean', label: 'Korean' },
        { value: 'tagalog', label: 'Tagalog' },
        { value: 'vietnamese', label: 'Vietnamese' },
        { value: 'other', label: 'Other' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
    {
      id: 2,
      desc: 'What is your marital status?',
      bg: theme.colorInfoActive,
      bg_toString_color: theme.colorInfo,
      color: theme.colorInfoTextActive,
      options: [
        { value: 'single', label: 'Single or never married' },
        { value: 'married', label: 'Married or domestic partnership' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'widowed', label: 'Widowed' },
        { value: 'separated', label: 'Separated' },
        { value: 'prefer-not-to-say', label: 'Prefer not to say' },
      ],
    },
  ];
};

export const EqTestPreAssessmentSelect = {
  '1': [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },
  ],
  '2': [
    { value: 'high_school', label: 'High School' },
    { value: 'professional_certificate', label: 'Professional Certificate' },
    { value: 'associate_degree', label: 'Associate Degree' },
    { value: 'bachelor_degree', label: "Bachelor's Degree" },
    { value: 'master_degree', label: "Master's Degree" },
    { value: 'doctoral_degree', label: 'Doctoral Degree' },
    { value: 'postdoctoral', label: 'Postdoctoral' },
    { value: 'trade_school', label: 'Trade School' },
    { value: 'some_college', label: 'Some College' },
    { value: 'none', label: 'None' },
  ],
  '3': [
    { value: 'united_states', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'united_kingdom', label: 'United Kingdom' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'italy', label: 'Italy' },
    { value: 'spain', label: 'Spain' },
    { value: 'australia', label: 'Australia' },
    { value: 'japan', label: 'Japan' },
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'south_africa', label: 'South Africa' },
    { value: 'nigeria', label: 'Nigeria' },
  ],
} as any;

export const EqQuestionRadioButton = [
  {
    value: '1',
    key: 'never',
    greenWidth: '30px',
    greenHeight: '30px',
    whiteWidth: '10px',
    whiteHeight: '10px',
    label: ' Never',
  },
  {
    value: '2',
    key: 'rarely',
    greenWidth: '25px',
    greenHeight: '25px',
    whiteWidth: '9px',
    whiteHeight: '9px',
    label: 'Rarely',
  },
  {
    value: '3',
    key: 'sometimes',
    greenWidth: '20px',
    greenHeight: '20px',
    whiteWidth: '8px',
    whiteHeight: '8px',
    label: 'Sometimes',
  },
  {
    value: '4',
    key: 'often',
    greenWidth: '25px',
    greenHeight: '25px',
    whiteWidth: '9px',
    whiteHeight: '9px',
    label: 'Ofter',
  },
  {
    value: '5',
    key: 'always',
    greenWidth: '30px',
    greenHeight: '30px',
    whiteWidth: '10px',
    whiteHeight: '10px',
    label: ' Always',
  },
];
export const EqPostAssessmnetQuestions = [
  {
    id: 1,
    question: 'I can identify what emotions I am feeling at any given time.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 2,
    question: 'I communicate my thoughts clearly without misinterpretation.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 3,
    question: 'When dilemmas arise, I identify the source of the issue.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 4,
    question: 'I pursue things with passion.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 5,
    question: 'I disagree with what others say about what my personality is like.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 6,
    question:
      'I have acted out of emotion or assumptions before thinking about the consequences of my behavior.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 7,
    question: 'I understand what behaviors are appropriate based on the environment I am in.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 8,
    question: 'I evaluate the potential consequences of the actions I consider taking.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 9,
    question: 'I do things without needing to be reminded by others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 10,
    question: 'I believe in myself, my abilities, and my value as a person.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 11,
    question:
      'I find myself working or putting effort into things that do not have a clear purpose.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 12,
    question: 'I do not find friendships or relationships in general beneficial for me.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 13,
    question: 'I consider my well-being when I make decisions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 14,
    question: 'I persevere in the face of obstacles to long-term and meaningful goals.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 15,
    question: 'I can identify and describe my automatic thoughts.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 16,
    question: 'I find myself getting distracted or tuning out when a person is speaking to me.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 17,
    question: 'When dilemmas arise, I hypothesize and analyze possible solutions to the issue.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 18,
    question: 'My work or personal life feel monotonous or uninspiring.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 19,
    question: 'I genuinely do well at what I believe I am good at.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 20,
    question: 'I feel too embarrassed or nervous to ask for help when I need it.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 21,
    question:
      'I accept responsibility and the potential consequences of my actions before and after taking action.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 22,
    question: 'I step forward from the group to guide us in the direction of a common goal.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 23,
    question: 'I am uncertain about what the future holds for me.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 24,
    question: 'I appreciate the practice of pursuing goals, not just the outcomes of them.',
    always: 'Almost Always',
    never: 'Almost Never',
  },

  {
    id: 25,
    question: 'I work well with others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 26,
    question: `I consider others' well-being when I make decisions.`,
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 27,
    question: 'I try again when unsuccessful.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 28,
    question: 'I know what I value or think is important.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 29,
    question: 'I speak up for myself.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 30,
    question: 'When dilemmas arise, I solve them constructively.',
    always: 'Almost Always',
    never: 'Almost Never',
  },

  {
    id: 31,
    question: 'I feel apathetic or indifferent when I begin most tasks at home or work',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 32,
    question: 'I am aware of my limits and challenges in knowledge and ability.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 33,
    question: 'I help others when they are in need.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 34,
    question: 'I reflect on the consequences of my actions and how they affect myself and others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 35,
    question:
      'No matter how hard I work, I believe that I continue to be stuck and dissatisfied where I am.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 36,
    question: 'I have many unfinished projects or commitments.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 37,
    question: 'I find myself in situations where consensus or compromises are rarely reached.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 38,
    question: 'I consider ethical responsibilities when I make decisions',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 39,
    question: 'I put in more effort when pursuing my goals becomes challenging.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 40,
    question: 'I am aware of how my automatic thoughts and emotions influence my behavior.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 41,
    question:
      'I actively pursue learning new skills to help myself manage my thoughts and emotions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 42,
    question:
      'I encourage others to share their thoughts and feelings to contribute to discussions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 43,
    question: 'I make constructive choices based on ethics, safety, and social context.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 44,
    question: 'I am motivated to do or create to a degree of extraordinary quality.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 45,
    question: 'My attitudes and preferences are reflected in my behaviors.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 46,
    question:
      'I multi-task to a level that I get distracted and have difficulty finishing what I started.    ',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 47,
    question:
      'I avoid community involvement, professional gatherings, or other social activities even when they can benefit my personal and/ or career growth.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 48,
    question:
      'I use the consequences of my actions from the past to guide my future decision-making.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 49,
    question: 'I believe that there is little I can do to change my current situation.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 50,
    question: 'I organize, make arrangements, and plan in advance.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 51,
    question:
      'I feel disrespected often, and as a result, I have a difficult time showing respect for others.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 52,
    question: 'I do not find teamwork useful in my career or personal development. ',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 53,
    question: 'I respect my immediate environment, nature, and the planet when I make decisions.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
  {
    id: 54,
    question: 'I adjust my goals and effort realistically when faced with insurmountable barriers.',
    always: 'Almost Always',
    never: 'Almost Never',
  },
];

export const ScenarioBasedQuestions = [
  {
    id: 1,
    scenario: `I am at a social gathering that is somewhat crowded. A guest seems to be intoxicated and has walked by my chair twice, shoving me each time. They say, "I'm sorry", each time but shove me more forcefully the next time and keep walking.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: 'Feel angry and push them back.',
      },
      {
        id: 2,
        option: 'Feel angry and yell at them.',
      },
      {
        id: 3,
        option: 'Feel angry but decide to help them since they are intoxicated.',
      },
      {
        id: 4,
        option: 'Feel angry and go to the host for assistance.',
      },
      {
        id: 5,
        option: 'Feel angry and say nothing.',
      },
    ],
  },
  {
    id: 2,
    scenario: `My new neighbor moved in next door, and I noticed that they use a wheelchair. However, I also noticed that their home does not have a ramp by the front door. One day as I am taking the groceries out of my car, I notice them struggling to get in the doorway.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Surprise them by building a ramp the next day.',
      },
      {
        id: 2,
        option: ' Introduce myself, ask them if I can help them enter and help them make a ramp.',
      },
      {
        id: 3,
        option: ' Ignore them and enter my home.',
      },
      {
        id: 4,
        option: ' Help them enter their house.',
      },
      {
        id: 5,
        option: 'Go home and research how I can support someone in a wheelchair.',
      },
    ],
  },
  {
    id: 3,
    scenario: `One afternoon, one of my coworkers has an idea to play a prank on one of the new interns. All of the coworkers agree with the plan, and I am asked to do something that I know will embarrass the intern.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: '  Go along with the prank even though I am uncomfortable with it.',
      },
      {
        id: 2,
        option: ' Tell them no and ignore what they are going to do.',
      },
      {
        id: 3,
        option: '  Go and quietly tell the office manager.',
      },
      {
        id: 4,
        option: '  Do what my coworkers ask of me and ignore the feelings of the intern.',
      },
      {
        id: 5,
        option: `Tell them no and also try to convince them that it's wrong to pick on the intern.`,
      },
    ],
  },
  {
    id: 4,
    scenario: `I was laid off and am having a difficult time paying my rent. I am in danger of being evicted. My family gives me a call, not knowing the situation.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Pretend like everything is okay and converse with them normally.',
      },
      {
        id: 2,
        option: ' Lie to them about how great work is and how I will receive a promotion soon.',
      },
      {
        id: 3,
        option:
          ' Talk to a family member and explain my situation, hoping they volunteer any help or advice.',
      },
      {
        id: 4,
        option: ` Tell them I was laid off but don't tell them that I will be evicted soon. I'd hate to worry them.`,
      },
      {
        id: 5,
        option: ` Talk to a close family friend, and ask them to keep my situation a secret from my family so that they will not worry.`,
      },
    ],
  },
  {
    id: 5,
    scenario: `I was laid off and am having a difficult time paying my rent. I am in danger of being evicted. My family gives me a call, not knowing the situation.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Pretend like everything is okay and converse with them normally.',
      },
      {
        id: 2,
        option: ' Lie to them about how great work is and how I will receive a promotion soon.',
      },
      {
        id: 3,
        option:
          ' Talk to a family member and explain my situation, hoping they volunteer any help or advice.',
      },
      {
        id: 4,
        option: ` Tell them I was laid off but don't tell them that I will be evicted soon. I'd hate to worry them.`,
      },
      {
        id: 5,
        option: ` Talk to a close family friend, and ask them to keep my situation a secret from my family so that they will not worry.`,
      },
    ],
  },
  {
    id: 6,
    scenario: `I was laid off and am having a difficult time paying my rent. I am in danger of being evicted. My family gives me a call, not knowing the situation.`,
    question: 'What would you most likely do in this situation?',
    options: [
      {
        id: 1,
        option: ' Pretend like everything is okay and converse with them normally.',
      },
      {
        id: 2,
        option: ' Lie to them about how great work is and how I will receive a promotion soon.',
      },
      {
        id: 3,
        option:
          '  Talk to a family member and explain my situation, hoping they volunteer any help or advice.',
      },
      {
        id: 4,
        option: `  Tell them I was laid off but don't tell them that I will be evicted soon. I'd hate to worry them.`,
      },
      {
        id: 5,
        option: `Talk to a close family friend, and ask them to keep my situation a secret from my family so that they will not worry.`,
      },
    ],
  },
];
