export const skillGroups = {
	Languages: {
		color: 'bg-slate-100 text-slate-700',
		items: ['TypeScript', 'Python', 'Golang','C++', 'C']
	},
	Frontend: {
		color: 'bg-blue-100 text-blue-700',
		items: ['SvelteKit', 'Tailwind CSS', 'Responsive UI']
	},
	Backend: {
		color: 'bg-green-100 text-green-700',
		items: ['REST APIs', 'MongoDB', 'Authentication', 'Admin Dashboards']
	},
	DataAndML: {
		color: 'bg-amber-100 text-amber-800',
		items: ['Data Analysis', 'Machine Learning', 'Recommendation Systems', 'Data Visualization']
	},
	Deployment: {
		color: 'bg-rose-100 text-rose-700',
		items: ['Vercel', 'GitHub', 'Production Deployment']
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
		company: 'Intellogic Technology',
		role: 'Software Engineer',
		duration: '2 years',
		summary:
			'Worked on industrial software products for factories, building systems that help teams monitor energy usage, manage operations, and track production efficiency.',
		highlights: [
			'Built energy management system features for industrial monitoring',
			'Developed Overall Equipment Effectiveness (OEE) workflows for factory operations',
			'Supported admin and worker-facing interfaces for production data entry and monitoring'
		]
	}
];
