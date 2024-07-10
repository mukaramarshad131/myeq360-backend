import { t } from 'i18next';

export const skillAssessmentData = [
  {
    key: '1',
    title: 'selfAwareness',
    series: [{ name: '', data: [73.33, 20] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 75,
    children: [
      { key: '10', title: 'sys.selfAwareness.emotionalAwareness', status: 'exceeding' },
      { key: '11', title: 'sys.selfAwareness.selfPerception', status: 'exceeding' },
      { key: '12', title: 'sys.selfAwareness.optimisticOutlook', status: 'developing' },
    ],
  },
  {
    key: '2',
    title: 'selfManagement',
    series: [{ name: '', data: [50] }],
    dataLable: ['25-06-2024'],
    percent: 50,
    children: [
      { key: '13', title: 'sys.selfManagement.internalRegulation', status: 'developing' },
      { key: '14', title: 'sys.selfManagement.behaviorControl', status: 'developing' },
      { key: '15', title: 'sys.selfManagement.goalPursuance', status: 'developing' },
    ],
  },
  {
    key: '3',
    title: 'socialAwareness',
    series: [{ name: '', data: [51.67, 90] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 50,
    children: [
      { key: '16', title: 'sys.socialAwareness.appreciatingSocial', status: 'meeting' },
      { key: '17', title: 'sys.socialAwareness.adaptiveBehavior', status: 'developing' },
      { key: '18', title: 'sys.socialAwareness.resourceSupportRecognition', status: 'developing' },
    ],
  },
  {
    key: '4',
    title: 'relationshipSkills',
    series: [{ name: '', data: [58.33, 67] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 50,
    children: [
      { key: '19', title: 'sys.relationshipSkills.communication', status: 'exceeding' },
      { key: '20', title: 'sys.relationshipSkills.socialEngagement', status: 'developing' },
      { key: '21', title: 'sys.relationshipSkills.interdependence', status: 'developing' },
    ],
  },
  {
    key: '5',
    title: 'responsibleDecisionMaking',
    series: [{ name: '', data: [76.67, 25.9] }],
    dataLable: ['25-06-2024', '09-07-2024'],
    percent: 75,
    children: [
      { key: '22', title: 'sys.responsibleDecisionMaking.constructiveThinking', status: 'meeting' },
      {
        key: '23',
        title: 'sys.responsibleDecisionMaking.consequenceEvaluation',
        status: 'exceeding',
      },
      { key: '24', title: 'sys.responsibleDecisionMaking.respectForSelf', status: 'meeting' },
    ],
  },
  {
    key: '6',
    title: 'motivation',
    series: [{ name: '', data: [63.33, 102.9] }],
    dataLable: ['25-06-2024 13:26:10', '09-07-2024 13:26:10'],
    percent: 75,
    children: [
      { key: '25', title: 'sys.motivation.enthusiasm', status: 'developing' },
      { key: '26', title: 'sys.motivation.initiative', status: 'meeting' },
      { key: '27', title: 'sys.motivation.resilience', status: 'meeting' },
    ],
  },
];

export const skillLevels = [
  t('sys.skillLevels.meeting'),
  t('sys.skillLevels.developing'),
  t('sys.skillLevels.exceeding'),
  t('sys.skillLevels.emerging'),
];
