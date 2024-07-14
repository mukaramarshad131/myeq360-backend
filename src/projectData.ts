import { t } from 'i18next';

export const skillAssessmentData = [
  {
    key: '1',
    title: 'sys.skillCategories.selfAwareness',
    abbrevation: 'sys.skillCategoriesAbb.sa',
    skillabrevation: 'sys.skillAbbrevation.m',
    skillLevel: 'sys.skillLevels.meeting',
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
    title: 'sys.skillCategories.selfManagement',
    abbrevation: 'sys.skillCategoriesAbb.sm',
    skillabrevation: 'sys.skillAbbrevation.d',
    skillLevel: 'sys.skillLevels.developing',
    series: [{ name: '', data: [50] }],
    dataLable: ['25-06-2024'],
    percent: 50,
    children: [
      { key: '13', title: 'sys.selfManagement.internalRegulation', status: 'developing' },
      { key: '14', title: 'sys.selfManagement.behaviorControl', status: 'developing' },
      { key: '15', title: 'sys.selfManagement.goalPursuance', status: 'developing' },
    ],
    info: '<b>You are Beginning to Develop Self-Management.</b> There is room for improvement for these skills that are coming into view.<br/> To Improve: Self-management can help you manage stress, motivate yourself, and set and work towards personal, academic, and professional goals. Self-management is important because it can help you manage the stress that is associated with a new workplace, dealing with problems with your coworkers, and coming up with solutions to different problems that you may face.<br/> <b>Sub-competencies of Self-Management</b>: Internal Regulation, Behavior Control, and Goal Pursuance',
  },
  {
    key: '3',
    title: 'sys.skillCategories.socialAwareness',
    abbrevation: 'sys.skillCategoriesAbb.so',
    skillabrevation: 'sys.skillAbbrevation.d',
    skillLevel: 'sys.skillLevels.developing',
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
    title: 'sys.skillCategories.relationshipSkills',
    abbrevation: 'sys.skillCategoriesAbb.rs',
    skillabrevation: 'sys.skillAbbrevation.d',
    skillLevel: 'sys.skillLevels.developing',
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
    title: 'sys.skillCategories.responsibleDecisionMaking',
    abbrevation: 'sys.skillCategoriesAbb.rd',
    skillabrevation: 'sys.skillAbbrevation.m',
    skillLevel: 'sys.skillLevels.meeting',
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
    info: '<b>You are Beginning to Meet Responsible Decision-Making.</b> This means that you have a knack for understanding yourself on a deeper level.<br/> Responsible decision making is important because you need to learn how to identify a problem, think of a solution, and understand the consequences for yourself and for others. Our words, actions, and decisions have an impact, so we need to be able to make responsible decisions. Otherwise, we could potentially hurt ourselves or others.<br/> <b>Sub-competencies of Responsible Decision-Making</b> : Constructive Thinking, Consequence Evaluation, and Respect for Self & Others',
  },
  {
    key: '6',
    title: 'sys.skillCategories.motivation',
    abbrevation: 'sys.skillCategoriesAbb.mo',
    skillabrevation: 'sys.skillAbbrevation.m',
    skillLevel: 'sys.skillLevels.meeting',
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
export const skills = [
  {
    key: 1,
    title: t('sys.skillLevels.emerging'),
    abbrevation: t('sys.skillAbbrevation.em'),
    info: t('sys.skillInfo.emerging'),
  },
  {
    key: 2,
    title: t('sys.skillLevels.developing'),
    abbrevation: t('sys.skillAbbrevation.d'),
    info: t('sys.skillInfo.developing'),
  },
  {
    key: 3,
    title: t('sys.skillLevels.meeting'),
    abbrevation: t('sys.skillAbbrevation.m'),
    info: t('sys.skillInfo.meeting'),
  },
  {
    key: 4,
    title: t('sys.skillLevels.exceeding'),
    abbrevation: t('sys.skillAbbrevation.ex'),
    info: t('sys.skillInfo.exceeding'),
  },
];
