// gitprofile.config.js

const config = {
  github: {
    username: 'SarthakChawathe', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/sarthak-chawathe-458251256/',
    twitter: 'https://twitter.com/Sarthak_C97',
//     mastodon: 'arifszn@mastodon.social',
    facebook: 'https://www.facebook.com/profile.php?id=100008154316936',
    instagram: 'https://www.instagram.com/sarthakchawathe/',
    hackerrank: 'https://www.hackerrank.com/sarthak_c1?hr_r=1',
//     dribbble: '',
//     behance: '',
//     medium: 'arifszn',
//     dev: 'arifszn',
//     stackoverflow: '', // format: userid/username
//     skype: '',
//     telegram: '',
    website: 'https://sarthakchawathe.github.io/portfolio/',
    phone: '+1 (812) 837 6816',
    email: 'sarthak.chawathe2012@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1EHVZN5hQCBSXUyU9x8lp--XMji3xut6a/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python', 
    'NumPy', 
    'Pandas', 
    'Scikit-learn', 
    'Matplotlib', 
    'TensorFlow', 
    'Keras', 
    'R', 
    'Java', 
    'C', 
    'HTML', 
    'CSS', 
    'JavaScript', 
    'Regression', 
    'Classification', 
    'Clustering', 
    'Natural Language Processing', 
    'Hadoop', 
    'Apache Spark', 
    'GCP', 
    'Hypothesis Testing', 
    'A/B Testing', 
    'Tableau', 
    'Seaborn', 
    'MySQL', 
    'BigQuery', 
    'PostgreSQL', 
    'DB2', 
    'MS Excel', 
    'Google Sheets', 
    'Jupyter Notebook', 
    'Git', 
    'Probability', 
    'Communication',
  ],
  experiences: [
    {
      company: 'Tata Consultancy Services',
      position: 'Assistant Systems Engineer',
      from: 'July 2019',
      to: 'December 2020',
      companyLink: 'https://www.tcs.com/',
    },
//     {
//       company: 'Company Name',
//       position: 'Position',
//       from: 'July 2019',
//       to: 'August 2021',
//       companyLink: 'https://example.com',
//     },
  ],
  certifications: [
    {
      name: 'Google Data Analytics',
//       body: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
      year: 'June 2022',
      link: 'https://drive.google.com/file/d/1tXSY1OeE0G3ID2JLbKZ54Zb-4B_xV4rp/view?usp=sharing'
    },
    {
      name: 'IBM Data Science',
//       body: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
      year: 'October 2021',
      link: 'https://drive.google.com/file/d/1nSImEWf8oUjTUZtmi4RktJOtSVcjuG90/view?usp=sharing'
    },
    {
      name: 'Microsoft Technology Associate: HTML5 Application Development Fundamentals',
//       body: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
      year: 'March 2019',
      link: 'https://drive.google.com/file/d/1FTuVhSD7P7H5n3g7lcVr2XG34TJEpRRF/view?usp=sharing'
    },
    {
      name: 'Programming with Python',
//       body: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
      year: 'August 2018',
      link: 'https://drive.google.com/file/d/1aOC6Zn3AR-JacNDKA7A5JQvuT1ztZwM5/view?usp=sharing'
    },
    {
      name: 'Introduction to Modern Application Devlopment',
//       body: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in Data Analytics. They are competent in tools and platforms including spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.',
      year: 'September 2017',
      link: 'https://drive.google.com/file/d/1wyIwsAKfquHeGunkKTD5Lo6b3e7qSGM_/view?usp=sharing'
    },
  ],
  education: [
    {
      institution: 'Indiana University Bloomington',
      degree: 'Master of Science, Data Science',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'KJ Somaiya Institute of Engineering & information Technology',
      degree: 'Bachelor of Engineering, Computer Engineering',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Driver Drowsiness Detection',
      description:
        'Developed a driver drowsiness detection system using advanced sensors and machine learning algorithms. The system monitors driver behavior in real-time and provides timely alerts to prevent accidents caused by drowsiness or fatigue.',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nauto.com%2Fblog%2Fintroducing-driver-drowsiness-alerts&psig=AOvVaw0IfeB1bUShYjfi3SKYJ54-&ust=1685035595865000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCm5PK8jv8CFQAAAAAdAAAAABAE',
      link: 'https://example.com',
    },
    {
      title: 'Uber Data Analysis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
