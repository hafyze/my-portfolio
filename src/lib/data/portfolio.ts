export const skillGroups = {
	Languages: {
		color: 'bg-slate-100 text-slate-700',
		items: ['TypeScript', 'JavaScript ES6', 'Golang', 'Python', 'C++', 'C#', 'Java']
	},
	Frontend: {
		color: 'bg-blue-100 text-blue-700',
		items: ['SvelteKit', 'React', 'Tailwind CSS', 'HTML5', 'CSS', 'SASS', 'Responsive UI']
	},
	Backend: {
		color: 'bg-green-100 text-green-700',
		items: ['REST APIs', 'MongoDB', 'SurrealDB', 'QuestDB', 'MQTT Broker', 'MVC Architecture']
	},
	DataAndML: {
		color: 'bg-amber-100 text-amber-800',
		items: ['Data Analysis', 'Machine Learning', 'Recommendation Systems', 'Data Visualization']
	},
	Tools: {
		color: 'bg-rose-100 text-rose-700',
		items: ['Git', 'GitHub', 'VSCode', 'IntelliJ', 'JIRA', 'Code Review']
	},
	LanguagesSpoken: {
		color: 'bg-cyan-100 text-cyan-800',
		items: ['Malay', 'English']
	}
};

export const projects = [
	{
		title: 'Smart Car Comparison & Recommendation System',
		desc: 'Built a final-year project with a frontend interface and data science workflow for vehicle price prediction, helping users explore cars and estimate market value from model-driven insights.',
		highlights: ['Frontend interface', 'Price prediction model', 'Data preparation and analysis'],
		tech: ['SvelteKit', 'Python', 'Machine Learning', 'Data Analysis'],
		github: 'https://github.com/hafyze/Degree_FYP',
		type: 'Machine Learning Project'
	},
	{
		title: 'Malaysia Vehicle Registration Analytics Dashboard',
		desc: 'Created an analytics dashboard around Malaysian vehicle registration data with interactive charts, filtering, and trend exploration using public sector datasets.',
		highlights: ['Public dataset integration', 'Interactive filtering', 'Trend visualization'],
		tech: ['SvelteKit', 'Data Visualization', 'Public Data'],
		github: 'https://github.com/hafyze/gov-data-car',
		type: 'Analytics Dashboard'
	},
	{
		title: 'Climate Change Trends Data Visualization',
		desc: 'Built an interactive D3.js project to analyze climate change trends across extreme weather, CO2 emissions, and renewable energy usage through multiple visual storytelling views.',
		highlights: ['Line charts', 'Pareto analysis', 'Choropleth mapping'],
		tech: ['D3.js', 'Data Visualization', 'Climate Data', 'Exploratory Analysis'],
		github: 'https://github.com/hafyze/DV-Project',
		type: 'Data Visualization Project'
	},
	{
		title: 'Online Detailing Booking Platform',
		desc: 'Developed a production-ready booking system for a car detailing business with customer scheduling flows, service selection, and an admin dashboard for operations.',
		highlights: ['Customer booking flow', 'Admin dashboard', 'Production deployment'],
		tech: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Vercel'],
		live: 'https://my-detailer.vercel.app/booking',
		type: 'Production Web App'
	},
	{
		title: 'Roomstay Booking Website',
		desc: 'Designed and launched a hospitality booking site focused on clean presentation, responsive UX, and SEO-friendly structure for discoverability.',
		highlights: ['Responsive design', 'SEO-focused structure', 'Business website launch'],
		tech: ['SvelteKit', 'Tailwind CSS', 'Vercel'],
		live: 'https://www.narkg.com/',
		type: 'Business Website'
	},
	{
		title: 'Expense Tracking Mobile Application',
		desc: 'Built a hybrid mobile app for logging expenses, organizing spending by category, and helping users understand personal finance patterns on the go.',
		highlights: ['Hybrid mobile app', 'Category-based tracking', 'Spending insight workflow'],
		tech: ['SvelteKit', 'Capacitor', 'Tailwind CSS'],
		github: 'https://github.com/hafyze/spending-tracker',
		type: 'Mobile App'
	}
];

export const experiences = [
	{
		company: 'Intellogic Technology Sdn Bhd',
		role: 'Software Engineer (Part Time)',
		duration: 'November 2023 - December 2025',
		summary:
			'Developed and enhanced an Industry 4.0 digitalization platform focused on Overall Equipment Efficiency (OEE), production monitoring, and manufacturing analytics for factory environments.',
		highlights: [
			'Built full-stack features with SvelteKit, TypeScript, Golang, MongoDB, QuestDB, and SurrealDB',
			'Developed dashboards, analytics modules, and reporting tools for machine performance',
			'Integrated REST APIs for real-time data collection and visualization',
			'Contributed to deployments used in multiple manufacturing facilities',
			'Supported platform interest from manufacturers including Perodua, DRB-HICOM, and Masasinar'
		],
		tech: ['SvelteKit', 'TypeScript', 'Golang', 'MongoDB', 'QuestDB', 'SurrealDB']
	},
	{
		company: 'Intellogic Technology Sdn Bhd',
		role: 'Software Engineer (Degree Internship)',
		duration: 'July 2024 - October 2024',
		summary:
			'Created an Industry 4.0 dashboard for OEE metrics, combining frontend layout work, backend logic, API integration, and MQTT-based real-time flows.',
		highlights: [
			'Implemented frontend layouts and application logic',
			'Built backend logic and RESTful API integrations',
			'Developed with MQTT broker workflows for live manufacturing data',
			'Participated in code reviews with a focus on clean code'
		],
		tech: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Golang', 'MongoDB', 'MQTT']
	},
	{
		company: 'Intellogic Technology Sdn Bhd',
		role: 'Software Engineer (Diploma Internship)',
		duration: 'July 2023 - October 2023',
		summary:
			'Worked across frontend and backend development for an energy management system designed to improve organizational efficiency and monitoring.',
		highlights: [
			'Implemented frontend screens and backend business logic',
			'Integrated RESTful APIs for operational data workflows',
			'Worked with industrial data stores including MongoDB and QuestDB',
			'Contributed through code review and maintainable implementation practices'
		],
		tech: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Golang', 'MongoDB', 'QuestDB']
	}
];

export const education = [
	{
		school: 'Multimedia University, Cyberjaya',
		program: 'Bachelor of Computer Science (Hons.) (Data Science)',
		duration: 'November 2023 - July 2026',
		result: 'CGPA: 3.64',
		courses: [
			'Software Engineering Fundamentals',
			'Object Oriented Analysis and Design',
			'Data Structure & Algorithm',
			'Data Science Fundamentals',
			'Data Mining',
			'Algorithm Design and Analysis'
		]
	},
	{
		school: 'Multimedia University',
		program: 'Diploma in Information Technology',
		duration: 'August 2021 - October 2023',
		result: 'CGPA: 3.44',
		courses: [
			'Program Design',
			'Object Oriented Programming',
			'Database Systems',
			'Mobile Application Development',
			'System Analysis & Design',
			'Computer Architecture & Organization'
		]
	},
	{
		school: 'Sek Men Sains Alam Shah',
		program: 'SPM Science Stream',
		duration: 'January 2016 - March 2021',
		result: '8A',
		courses: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
	},
	{
		school: 'freeCodeCamp',
		program: 'Front-end App Development',
		duration: 'May 2021',
		result: 'Online Certification',
		courses: [
			'Responsive Web Design',
			'Algorithms and Data Structures',
			'Front End Development Libraries',
			'Bootstrap',
			'jQuery',
			'React',
			'Redux'
		]
	},
	{
		school: 'Udemy',
		program: 'Software Development and Data Science Learning',
		duration: 'January 2023',
		result: 'Online Courses',
		courses: [
			'SDLC & Agile Software Development',
			'Manual Software Testing',
			'Python for Machine Learning & Data Science'
		]
	}
];
