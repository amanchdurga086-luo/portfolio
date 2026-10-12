export const personal = {
  name: 'Aman Chaudhary',
  role: 'Software Engineer',
  intro: "I'm a Software Developer focused on the MERN stack, Java, and Object-Oriented Programming (OOP). I enjoy building full-stack web applications, designing RESTful APIs, applying software engineering principles, and solving complex problems through Data Structures & Algorithms.",
  resumeUrl: '/resume.pdf',
  social: { github: 'https://github.com/amanchdurga086-luo', linkedin: 'https://www.linkedin.com/in/aman-kr-chaudhary/', email: 'mailto:amanchdurga086@gmail.com' },
};

export const skillGroups = [
  ['Languages', ['Java', 'C++', 'JavaScript', 'SQL', 'Python', 'C']],
  ['Frontend', ['React.js', 'Bootstrap', 'HTML', 'CSS']],
  ['Backend', ['Node.js', 'Express.js', 'REST APIs', 'JWT']],
  ['Databases', ['MongoDB', 'Mongoose', 'MySQL']],
  ['Concepts', ['Data Structures & Algorithms', 'OOP', 'SOLID Principles', 'Design Patterns']],
  ['Developer Tools', ['Git', 'GitHub', 'VS Code', 'Postman']],
];

export const projects = [
  { title: 'PathFinder Visualizer', type: 'React · Algorithms', description: 'An interactive pathfinding visualizer that demonstrates graph traversal and shortest-path algorithms through real-time animation.', stack: ['React.js', 'JavaScript', 'CSS3', 'DSA'], features: ['BFS, DFS & Dijkstra', 'Interactive grid and maze generation', 'Speed control & responsive dark UI'], github: 'https://github.com/amanchdurga086-luo/PathFinder_Visualizer.git', live: 'https://path-finder-visualizer-8qxl.vercel.app/', art: 'path' },
  { title: 'Authentication System', type: 'Node · Security', description: 'A secure authentication backend with protected routes, JWT-based access and role-aware authorization.', stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'], features: ['Registration and login', 'HttpOnly cookies & refresh tokens', 'Validation and role authorization'], github: 'https://github.com/amanchdurga086-luo/authentication-system.git', live: null, art: 'auth' },
  { title: 'Library Management System', type: 'Java · Console application', description: 'A console-based library management system built with Java OOP, collections, encapsulation, and clear layered responsibilities.', stack: ['Java', 'OOP', 'Collections', 'Exception Handling', 'Optional'], features: ['Book and member CRUD with unique IDs and Optional search', 'Borrowing and return workflows with records and lending limits', 'Custom exception hierarchy for business-rule violations'], github: 'https://github.com/amanchdurga086-luo/LibraryManagementSystem.git', live: null, art: 'library' },
  { title: 'Sorting Visualizer', type: 'JavaScript · Algorithms', description: 'An interactive sorting visualizer that makes algorithm behavior easier to understand through animated comparisons, swaps, and performance feedback.', stack: ['JavaScript', 'Algorithms', 'CSS3', 'Local Storage'], features: ['Bubble, Selection, Insertion, Merge, Quick, and Heap Sort', 'Adjustable speed, pause and resume controls, and color legend', 'Algorithm complexity, pseudocode, and saved light/dark theme'], github: 'https://github.com/amanchdurga086-luo/Sorting-Visualizer.git', live: null, art: 'sorting' },
  { title: 'Weather Application', type: 'React · API integration', description: 'A responsive weather application that retrieves and displays current city-based weather information.', stack: ['React.js', 'JavaScript', 'CSS', 'Weather API'], features: ['City search', 'API integration', 'Clean, responsive interface'], github: 'https://github.com/amanchdurga086-luo/Weather.git', live: null, art: 'weather' },
  { title: 'Todo List Application', type: 'JavaScript · Productivity', description: 'A task management application for organizing daily activities and keeping progress visible across sessions.', stack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'], features: ['Create, edit, delete, and complete tasks', 'Persists user data with browser local storage', 'Responsive interface for a seamless experience across devices'], github: 'https://github.com/amanchdurga086-luo/TO-DO-LIST.git', live: null, art: 'todo' },
  { title: 'InAmigos Foundation Awareness Website', type: 'HTML · CSS', description: 'A modern, responsive NGO awareness landing page that highlights the InAmigos Foundation’s mission, projects, impact, and volunteer opportunities.', stack: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'], features: ['Sticky navigation, mission and impact sections', 'Responsive gallery with hover effects and calls to action', 'Semantic HTML with accessible image alt text'], github: 'https://github.com/amanchdurga086-luo/webPage.git', live: null, art: 'awareness' },
  { title: 'Notes API', type: 'Node · REST API', description: 'A RESTful API for managing notes, designed around Express routing, MongoDB models and clear error handling.', stack: ['Node.js', 'Express.js', 'MongoDB', 'Postman'], features: ['Full CRUD workflow', 'Controllers and middleware', 'Environment-based configuration'], github: 'https://github.com/amanchdurga086-luo/notes-api.git', live: null, art: 'notes' },
];

export const experience = { organisation: 'InAmigos Foundation', role: 'Web Development & UI/UX Design Intern', dates: 'June 2026 - July 2026', points: ['Developed a responsive NGO awareness webpage using HTML and CSS.', "Designed UI/UX feature proposals in Figma for the organization's website.", 'Researched and documented volunteer opportunities and social initiatives.'] };
