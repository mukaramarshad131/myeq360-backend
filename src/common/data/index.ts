export const defaultRole = [
  {
    id: '9100714781927703',
    parentId: '',
    label: 'sys.menu.dashboard',
    name: 'Dashboard',
    icon: 'ic-analysis',
    type: 'CATALOGUE',
    route: 'dashboard',
    order: 1,
    children: [
      {
        id: '8426999229400979',
        parentId: '9100714781927703',
        label: 'sys.menu.individual-dashboard',
        name: 'Individual Dashboard',
        type: 'MENU',
        route: 'individual-dashboard',
        component: '/dashboard/individual-dashboard/index.tsx',
      },
    ],
  },
  {
    id: '0901673425580518',
    parentId: '',
    label: 'sys.menu.management',
    name: 'User',
    icon: 'ic-user',
    type: 'CATALOGUE',
    route: 'management',
    order: 2,
    children: [
      {
        id: '4754063958766648',
        parentId: '0901673425580518',
        label: 'sys.menu.profile',
        name: 'Profile',
        type: 'MENU',
        route: 'profile',
        component: '/profile-management/user/profile/index.tsx',
      },
      {
        id: '2516598794787938',
        parentId: '0901673425580518',
        label: 'sys.menu.account',
        name: 'Account',
        type: 'MENU',
        route: 'account',
        component: '/profile-management/user/account/index.tsx',
      },
    ],
  },
];
export const defaultAdminRole = [
  {
    id: '9100714781927703',
    parentId: '',
    label: 'sys.menu.dashboard',
    name: 'Dashboard',
    icon: 'ic-analysis',
    type: 'CATALOGUE',
    route: 'dashboard',
    order: 1,
    children: [
      {
        id: '8426999229400979',
        parentId: '9100714781927703',
        label: 'sys.menu.individual-dashboard',
        name: 'Individual Dashboard',
        type: 'MENU',
        route: 'individual-dashboard',
        component: '/dashboard/individual-dashboard/index.tsx',
      },
    ],
  },
  {
    id: '0901673425580518',
    parentId: '',
    label: 'sys.menu.management',
    name: 'User',
    icon: 'ic-user',
    type: 'CATALOGUE',
    route: 'management',
    order: 2,
    children: [
      {
        id: '4754063958766648',
        parentId: '0901673425580518',
        label: 'sys.menu.profile',
        name: 'Profile',
        type: 'MENU',
        route: 'profile',
        component: '/profile-management/user/profile/index.tsx',
      },
      {
        id: '2516598794787938',
        parentId: '0901673425580518',
        label: 'sys.menu.account',
        name: 'Account',
        type: 'MENU',
        route: 'account',
        component: '/profile-management/user/account/index.tsx',
      },
      {
        id: '4754063958755648',
        parentId: '0901673425580518',
        label: 'sys.menu.package',
        name: 'Packages & License',
        type: 'MENU',
        route: 'package',
        component: '/management/packages-license/index.tsx',
      },
      {
        id: '2516598794587938',
        parentId: '0901673425580518',
        label: 'sys.menu.question',
        name: 'Questions',
        type: 'MENU',
        route: 'question',
        component: '/management/questions/index.tsx',
      },
      {
        id: '2516598794877938',
        parentId: '0901673425580518',
        label: 'sys.menu.entity',
        name: 'Entities',
        type: 'MENU',
        route: 'entities',
        component: '/management/entities/index.tsx',
      },
    ],
  },
];
export const competencies = [
  { title: 'Self-Awareness' },
  { title: 'Self-Management' },
  { title: 'Social Awareness' },
  { title: 'Relationship Skills' },
  { title: 'Responsible Decision-Making' },
  { title: 'Motivation' },
];
export const categories = [
  {title: "Business and Business Professionals"},
  {title: "Coach and Clients"},
  {title: "Educational Institutions and Educators"}
]
export const subCompetencies = [
  { title: 'Emotional Awareness', competencyTitle: 'Self-Awareness' },
  { title: 'Self-Perception', competencyTitle: 'Self-Awareness' },
  { title: 'Optimistic Outlook', competencyTitle: 'Self-Awareness' },
  { title: 'Internal Regulation', competencyTitle: 'Self-Management' },
  { title: 'Behavior Control', competencyTitle: 'Self-Management' },
  { title: 'Goal Pursuance', competencyTitle: 'Self-Management' },
  {
    title: 'Appreciating Social & Environmental Diversity',
    competencyTitle: 'Social Awareness',
  },
  { title: 'Adaptive Behavior', competencyTitle: 'Social Awareness' },
  {
    title: 'Resource & Support Recognition',
    competencyTitle: 'Social Awareness',
  },
  { title: 'Communication', competencyTitle: 'Relationship Skills' },
  { title: 'Social Engagement', competencyTitle: 'Relationship Skills' },
  { title: 'Interdependence', competencyTitle: 'Relationship Skills' },
  {
    title: 'Constructive Thinking',
    competencyTitle: 'Responsible Decision-Making',
  },
  {
    title: 'Consequence Evaluation',
    competencyTitle: 'Responsible Decision-Making',
  },
  {
    title: 'Respect for Self & Others',
    competencyTitle: 'Responsible Decision-Making',
  },
  { title: 'Enthusiasm', competencyTitle: 'Motivation' },
  { title: 'Initiative', competencyTitle: 'Motivation' },
  { title: 'Resilience', competencyTitle: 'Motivation' },
];

export const assignTo = [
  { title: 'Adult' },
  { title: 'Teacher' },
  { title: 'Student' },
  { title: 'Parent' },
  { title: 'Teacher on adult' },
  { title: 'District' },
  { title: 'Coach' },
  { title: 'Corporate Manager' },
  { title: 'Third party user' },
];

export const questions = [
  {
    question: 'I can identify what emotions I am feeling at any given time.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Emotional Awareness' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question: 'I know what I value or think is important.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Emotional Awareness' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      'I am aware of how my automatic thoughts and emotions influence my behavior.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Emotional Awareness' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      'I disagree with what others say about what my personality is like.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Self-Perception' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question: 'I genuinely do well at what I believe I am good at.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Self-Perception' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      'I am aware of my limits and challenges in knowledge and ability.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Self-Perception' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question: 'My attitudes and preferences are reflected in my behaviors.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Self-Perception' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question: 'I believe in myself, my abilities, and my value as a person.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Optimistic Outlook' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question: 'I am uncertain about what the future holds for me.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Optimistic Outlook' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      'No matter how hard I work, I believe that I continue to be stuck and dissatisfied where I am.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Optimistic Outlook' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      'I believe that there is little I can do to change my current situation.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Optimistic Outlook' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      "I am at a social gathering that is somewhat crowded. A guest seems to be intoxicated and has walked by my chair twice, shoving me each time. They say, I'm sorry, each time but shove me more forcefully the next time and keep walking. What would you most likely do in this situation?",
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Internal Regulation' },
    competency: { title: 'Self-Management' },
    options: [
      'Feel angry and push them back.',
      'Feel angry and yell at them.',
      'Feel angry but decide to help them since they are intoxicated.',
      'Feel angry and go to the host for assistance.',
      'Feel angry and say nothing.',
    ],
  },
  {
    question:
      'I am in a team project at work in the midst of the workday. A few of my coworkers who are not on my team but in the same workspace keep showing each other pictures on their phones of their weekend. My team has a deadline coming up. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Internal Regulation' },
    competency: { title: 'Self-Management' },
    options: [
      'Try my best to focus on my task but look over a few times to see what they are looking at.',
      'Go over to my coworkers and ask them if I can see the pictures as well.',
      'Tell my manager that the coworkers are distracting my team from our task.',
      'Try my best to focus on the task but eventually decide to move my team to a different location.',
      'Ignore them and ask my team to stay focused so that we can finish our task.'
    ],
  },
  {
    question:
      'The company I work for has laid off several people in my division. As a consequence, I am expected to complete tasks I am not familiar with and I am not paid to do. I am feeling stressed and demoralized. What would you most likely do during this time?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Internal Regulation' },
    competency: { title: 'Self-Management' },
    options: [
      'Find activities I enjoy and talk with a friend about how I have been feeling.',
      "Work as hard as I can knowing that I can't change the situation. ",
      'Call my friends to vent.',
      'Go to the gym everyday.',
      'Drink every night so that I do not have to think about my job until the next morning.'
    ],
  },
  {
    question:
      'I actively pursue learning new skills to help myself manage my thoughts and emotions.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Internal Regulation' },
    competency: { title: 'Self-Management' },
    options: [],
  },
  {
    question:
      'I have acted out of emotion or assumptions before thinking about the consequences of my behavior.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Behavior Control' },
    competency: { title: 'Self-Management' },
    options: [],
  },
  {
    question: 'I can identify and describe my automatic thoughts.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Emotional Awareness' },
    competency: { title: 'Self-Awareness' },
    options: [],
  },
  {
    question:
      'I adjust my goals and effort realistically when faced with insurmountable barriers.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resilience' },
    competency: { title: 'Motivation' },
    options: [],
  },
  {
    question:
      'I put in more effort when pursuing my goals becomes challenging.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resilience' },
    competency: { title: 'Motivation' },
    options: [],
  },
  {
    question: 'I try again when unsuccessful.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resilience' },
    competency: { title: 'Motivation' },
    options: [],
  },
  {
    question:
      'I persevere in the face of obstacles to long-term and meaningful goals.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resilience' },
    competency: { title: 'Motivation' },
    options: [],
  },
  {
    question:
      'I am feeling anxious about a work deadline.In this situation, what would you most likely do?',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Behavior Control' },
    competency: { title: 'Self-Management' },
    options: [
      'Decide to not think about it until the last minute because I will get it done.',
      "Find ways to delegate my work to my coworkers so I don't have to do as much work.",
      "Have trouble sleeping at night because I can't stop thinking about the tasks I need to complete.",
      'Reach out to my manager or supervisor and share all of my worries about finishing the project.',
      'Remain calm and find a strategy to keep me on track'
    ],
  },
  {
    question:
      'I practice constructive habits to manage feelings of anxiety, worry, and stress.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Behavior Control' },
    competency: { title: 'Self-Management' },
    options: [],
  },
  {
    question:
      'I multi-task to a level that I get distracted and have difficulty finishing what I started.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Behavior Control' },
    options: [],
    competency: { title: 'Self-Management' },
  },
  {
    question:
      'I find myself working or putting effort into things that do not have a clear purpose.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Goal Pursuance' },
    options: [],
    competency: { title: 'Self-Management' },
  },
  {
    question:
      'I appreciate the practice of pursuing goals, not just the outcomes of them.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Goal Pursuance' },
    options: [],
    competency: { title: 'Self-Management' },
  },
  {
    question: 'I have many unfinished projects or commitments.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Goal Pursuance' },
    options: [],
    competency: { title: 'Self-Management' },
  },
  {
    question: 'I organize, make arrangements, and plan in advance.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Goal Pursuance' },
    options: [],
    competency: { title: 'Self-Management' },
  },
  {
    question: 'I communicate my thoughts clearly without misinterpretation.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Communication' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I find myself getting distracted or tuning out when a person is speaking to me.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Communication' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question: 'I speak up for myself.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Communication' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I encourage others to share their thoughts and feelings to contribute to discussions.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Communication' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I do not find friendships or relationships in general beneficial for me.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Interdependence' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question: 'I work well with others.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Interdependence' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I find myself in situations where consensus or compromises are rarely reached.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Interdependence' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I do not find teamwork useful in my career or personal development.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Interdependence' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question: 'When dilemmas arise, I identify the source of the issue.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Constructive Thinking' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'When dilemmas arise, I hypothesize and analyze possible solutions to the issue.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Constructive Thinking' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question: 'When dilemmas arise, I solve them constructively.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Constructive Thinking' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'I make constructive choices based on ethics, safety, and social context.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Constructive Thinking' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'I evaluate the potential consequences of the actions I consider taking.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Consequence Evaluation' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'I accept responsibility and the potential consequences of my actions before and after taking action.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Consequence Evaluation' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'I reflect on the consequences of my actions and how they affect myself and others.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Consequence Evaluation' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'I use the consequences of my actions from the past to guide my future decision-making.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Consequence Evaluation' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question: 'I consider my well-being when I make decisions.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Respect for Self & Others' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question: 'I consider others well-being when I make decisions.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Respect for Self & Others' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question: 'I consider ethical responsibilities when I make decisions.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Respect for Self & Others' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question:
      'I respect my immediate environment, nature, and the planet when I make decisions.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Respect for Self & Others' },
    options: [],
    competency: { title: 'Responsible Decision-Making' },
  },
  {
    question: 'I pursue things with passion.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Enthusiasm' },
    options: [],
    competency: { title: 'Motivation' },
  },
  {
    question: 'My work or personal life feel monotonous or uninspiring.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Enthusiasm' },
    options: [],
    competency: { title: 'Motivation' },
  },
  {
    question:
      'I feel apathetic or indifferent when I begin most tasks at home or work.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Enthusiasm' },
    options: [],
    competency: { title: 'Motivation' },
  },
  {
    question:
      'I am motivated to do or create to a degree of extraordinary quality.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Enthusiasm' },
    options: [],
    competency: { title: 'Motivation' },
  },
  {
    question: 'I do things without needing to be reminded by others.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Initiative' },
    options: [],
    competency: { title: 'Motivation' },
  },
  {
    question:
      'I step forward from the group to guide us in the direction of a common goal.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Initiative' },
    options: [],
    competency: { title: 'Motivation' },
  },
  {
    question:
      'My manager has given me a bad evaluation even though I feel like I have put in extra hours and worked really hard this year. I also helped the company improve their sales. My poor evaluation will prevent me from getting a bonus I feel I deserve.  What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Initiative'},
    options: [
      'Go home and cry.',
      'Ignore the evaluation and decide to work harder so that the manager cannot ignore my hard work when it comes time for the next evaluation.',
      'Ask my co-worker to speak with the manager and ask them why I was evaluated poorly.',
      'Speak with my manager and ask why I was marked down on my evaluation',
      'Go to the CEO of the company and complain about my manager and the unfair evaluation.'
    ],
    competency: { title: 'Motivation' },
  },
  {
    question:
      'I witnessed a coworker being verbally harassed by others because of the color of their skin. The coworker complains to the manager about what is happening to them. The manager does not do anything about it. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Initiative' },
    options: [
      "Stay quiet since I don't want to put myself in trouble and lose my job.",
      'Talk to my manager and express my disappointment in them for not helping.',
      "Ask the co-worker to consider leaving the company so that they don't experience bullying by the other co-workers",
      'Speak to those who are verbally harassing the co-worker about how inappropriate their actions are. ',
      'Advise the bullied employee to speak to HR and offer to be a witness to the bullying. '
    ],
    competency: { title: 'Motivation' },
  },
  {
    question:
      'One afternoon, one of my coworkers has an idea to play a prank on one of the new interns. All of the coworkers agree with the plan, and I am asked to do something that I know will embarrass the intern. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Social Engagement' },
    options: [
      'Go along with the prank even though I am uncomfortable with it.',
      'Tell them no and ignore what they are going to do.',
      'Go and quietly tell the office manager. ',
      'Do what my coworkers ask of me and ignore the feelings of the intern',
      "Tell them no and also try to convince them that it's wrong to pick on the intern."
    ],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I feel too embarrassed or nervous to ask for help when I need it.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Social Engagement' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question: 'I help others when they are in need.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Social Engagement' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'I avoid community involvement, professional gatherings, or other social activities even when they can benefit my personal and/ or career growth.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Social Engagement' },
    options: [],
    competency: { title: 'Relationship Skills' },
  },
  {
    question:
      'My new neighbor moved in next door, and I noticed that they use a wheelchair. However, I also noticed that their home does not have a ramp by the front door. One day as I am taking the groceries out of my car, I notice them struggling to get in the doorway. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Appreciating Social & Environmental Diversity' },
    options: [
      'Surprise them by building a ramp the next day. ',
      'Introduce myself, ask them if I can help them enter and help them make a ramp.',
      'Ignore them and enter my home',
      'Help them enter their house',
      'Go home and research how I can support someone in a wheelchair. '
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'There is a new coworker at my workplace. Each morning they have been walking into the office looking upset and sitting by themself in the company cafeteria. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Appreciating Social & Environmental Diversity' },
    options: [
      'Ignore them',
      'Make fun of them with my coworkers since they are always alone. ',
      'Ask them to join us at our next happy hour.',
      'Introduce myself and start a private conversation about how they are adjusting to the new company',
      'Speak with our manager about my observations of the new coworker.'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      "I am invited to my co-worker's home for a potluck. I am especially picky with my food, but I noticed there are a lot of foods I cannot recognize, especially the dishes that were brought by my coworker. What would you most likely do in this situation?",
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Appreciating Social & Environmental Diversity' },
    options: [
      'Show my disgust for different smells and only eat the foods I am familiar with.',
      'Tell them that I am allergic to certain foods so I only have to eat the food I brought. ',
      "Try a little bit of everyone's dishes even though I normally don't like new foods.",
      "Try a little bit of everyone's dishes, ask questions about the dishes, and ask for recipes.",
      'Try 1 or 2 new dishes that look appetizing and the dish I brought'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      "I am on a crowded train after work. Some people are sleeping, and some people are working next to me. I get a call from a friend who I haven't talked to in a while and have had trouble setting up a time to chat with. What would you most likely do in this situation?",
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Appreciating Social & Environmental Diversity' },
    options: [
      'Talk to them since it will be difficult to find another time to chat',
      'Let them know I will call back as soon as I get home since I am on the train with other people',
      'Talk to them really quietly while glancing at the other passengers to make sure I am not bothering them',
      'Try to find another section of the train that is not as crowded.',
      "Talk loudly while laughing at my friend's stories."
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'I understand what behaviors are appropriate based on the environment I am in.',
    type: 'RANGE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Adaptive Behavior' },
    options: [],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'I have heard from my co-workers that it is possible to exaggerate on our overtime to receive greater compensation since our supervisors do not check our timesheets. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Adaptive Behavior' },
    options: [
      'Decide that it is okay to add a few hours of overtime each pay period.',
      "Don't say anything and pretend like I didn't hear anything from my coworkers",
      "I would tell them they should reconsider, and that it's important to be honest with our work.",
      'Consider adding a few more hours, but in the end, recognize it is not ethical',
      'Without implicating anyone, communicate with coworkers and higher-up the importance of accountability for our work and timesheets.'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'A group of friends and I decide to go on a hike. We decide to pick a path that has the best view. After a long hike up, we realize that the entrance to the viewpoint is closed, and there is a sign warning of unsafe conditions due to inclimate weather the week before. All of my friends want to continue going down the path, despite the warning. They say that those signs are always present but nothing to worry about. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Adaptive Behavior' },
    options: [
      'Tell them I will wait for them to come back',
      'Be worried about my safety but I would keep going with my friends.',
      "Search for another route that would also have a nice view and share that it's not worth risking our safety.",
      'Feel excited for the challenge and go for it.',
      'Start going down the path with them, and then if I see that it is too dangerous to continue, I would turn back.'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'On my commute back home from work on the train, I see a group of adults harassing another person on the train. There are many bystanders but everyone ignores what is happening to the victim. I am feeling uncomfortable with the situation.  What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Adaptive Behavior' },
    options: [
      'Step in and start to fight the group of adults.',
      'Ignore it and continue to look at my phone.',
      'Move to another train car.',
      'Ask the group to stop and ask others to help',
      'Call the police or security on the train.'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'I was laid off and am having a difficult time paying my rent. I am in danger of being evicted. My family gives me a call, not knowing the situation.  What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resource & Support Recognition' },
    options: [
      'Pretend like everything is okay and converse with them normally.',
      'Lie to them about how great work is and how I will receive a promotion soon',
      'Talk to a family member and explain my situation, hoping they volunteer any help or advice.',
      "Tell them I was laid off but don't tell them that I will be evicted soon. I'd hate to worry them",
      'Talk to a close family friend, and ask them to keep my situation a secret from my family so that they will not worry.'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'I am moving to a new apartment, but I cannot afford to hire movers. I have some large furniture and several boxes, but I know I cannot move everything on my own. My friends have offered to help. What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resource & Support Recognition' },
    options: [
      'Refuse their offer because I do not want to burden them',
      'Tell them I really appreciate the offer and am happy to help them with anything they may need in the future. ',
      'Accept their offer to help me move all of my things and have them over for dinner once settled in',
      'Accept their offer but feel guilty for taking up their time.',
      "Tell them I have hired movers. I wouldn't want them to know about my financial situation."
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'I notice a person at the park that appears to be exhibiting extreme emotional and mental distress.What would you most likely do in this situation?',
    type: 'MULTIPLE',
    rank: 'positive',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resource & Support Recognition' },
    options: [
      'Call the Crisis Hotline for my area and ask what should be done.',
      'Walk over to the distressed person and handle the situation on my own',
      'Call the police and stick around to ensure it is handled properly',
      'Call my friend who is a social worker and ask her what I should do.',
      'Call the police and leave the park, knowing that they will handle the situation.'
    ],
    competency: { title: 'Social Awareness' },
  },
  {
    question:
      'I feel disrespected often, and as a result, I have a difficult time showing respect for others.',
    type: 'RANGE',
    rank: 'negative',
    assignTo: { title: 'Adult' },
    subCompetency: { title: 'Resource & Support Recognition' },
    options: [],
    competency: { title: 'Social Awareness' },
  },
];

export const licenses = [
  {
    title: 'student',
    des: 'Knowing key details about your emotional intelligence (EQ) is the first step to happiness and self-improvement for your students that will benefit them for the rest of their lives. With the help of EQ360 by STRUT, you can take the first step in full confidence.',
    price: 1,
    oldPrice: 1,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Educational Institutions and Educators' },
        create: { title: 'Educational Institutions and Educators' },
      },
    },
  },
  {
    title: 'Teacher',
    des: 'Knowing key details about your emotional intelligence (EQ) is the first step to happiness and self-improvement for your students that will benefit them for the rest of their lives. With the help of EQ360 by STRUT, you can take the first step in full confidence.',
    price: 3,
    oldPrice: 5,
    disc: 40,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Educational Institutions and Educators' },
        create: { title: 'Educational Institutions and Educators' },
      },
    },
  },
  {
    title: 'Principal',
    des: 'Knowing key details about your emotional intelligence (EQ) is the first step to happiness and self-improvement for your students that will benefit them for the rest of their lives. With the help of EQ360 by STRUT, you can take the first step in full confidence.',
    price: 15,
    oldPrice: 20,
    disc: 25,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Educational Institutions and Educators' },
        create: { title: 'Educational Institutions and Educators' },
      },
    },
  },
  {
    title: 'District',
    des: 'Knowing key details about your emotional intelligence (EQ) is the first step to happiness and self-improvement for your students that will benefit them for the rest of their lives. With the help of EQ360 by STRUT, you can take the first step in full confidence.',
    price: 15,
    oldPrice: 30,
    disc: 50,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Educational Institutions and Educators' },
        create: { title: 'Educational Institutions and Educators' },
      },
    },
  },
  {
    title: 'EQ360 Business EXECUTIVE License',
    des: 'The EQ360 Business Executive License allows the user to establish a multi-team view of their department or company...',
    price: 100,
    oldPrice: 100,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Business and Business Professionals' },
        create: { title: 'Business and Business Professionals' },
      },
    },
  },
  {
    title: 'EQ360 Business INDIVIDUAL (with a Team Code) License',
    des: 'Individual Business team members are required to enter the team code assigned by their manager. To continue Get Team Code from your manager...',
    price: 30,
    oldPrice: 30,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Business and Business Professionals' },
        create: { title: 'Business and Business Professionals' },
      },
    },
  },
  {
    title: 'EQ360 Business INDIVIDUAL License NOT Member of Team',
    des: 'An EQ360 Business INDIVIDUAL License is a type of license that allows a single individual to access and use the EQ360 assessment tool for business purposes...',
    price: 30,
    oldPrice: 30,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Business and Business Professionals' },
        create: { title: 'Business and Business Professionals' },
      },
    },
  },
  {
    title: 'EQ360 Business MANAGER License',
    des: 'The EQ360 Business Manager License allows the user to establish a single view of their team...',
    price: 75,
    oldPrice: 75,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Business and Business Professionals' },
        create: { title: 'Business and Business Professionals' },
      },
    },
  },
  {
    title: 'EQ360 Business TEAM MEMBER License',
    des: 'Business Manager pays for clients. The Business Individual License allows a user to register with a specific registered team...',
    price: 30,
    oldPrice: 30,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Business and Business Professionals' },
        create: { title: 'Business and Business Professionals' },
      },
    },
  },
  {
    title: 'EQ360 Professional CLIENT License',
    des: 'Individual clients require to enter the team code assigned by their coach...',
    price: 25,
    oldPrice: 25,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Coach and Clients' },
        create: { title: 'Coach and Clients' },
      },
    },
  },
  {
    title: 'EQ360 Professional CLIENT License with Team Code',
    des: 'Individual clients require to enter the team code assigned by their coach...',
    price: 25,
    oldPrice: 25,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Coach and Clients' },
        create: { title: 'Coach and Clients' },
      },
    },
  },
  {
    title: 'EQ360 Professional COACH License',
    des: 'The Professional Coach license allows for the user to establish a single view of their practice...',
    price: 50,
    oldPrice: 50,
    disc: 0,
    image: null,
    category: {
      connectOrCreate: {
        where: { title: 'Coach and Clients' },
        create: { title: 'Coach and Clients' },
      },
    },
  },
];
export const rolesList=[
  {name: "individual"},
  {name: "Executive"},
  {name: "Team member"},
  {name: "Manager"},
  {name: "District"},
  {name: "Principal"},
  {name: "Teacher"},
  {name: "Student"},
  {name: "Client"},
  {name: "Coach"},
  {name: "Super admin"}
]