export const skillGroups = {
    Frontend: {
        color: 'bg-blue-100 text-blue-700',
        items: ['SvelteKit', 'TypeScript', 'TailwindCSS']
    },
    Backend: {
        color: 'bg-green-100 text-green-700',
        items: ['Python', 'C++', 'C']
    },
    Data: {
        color: 'bg-purple-100 text-purple-700',
        items: ['Data Science, Machine Learning', 'Data Analysis']
    }
}

export const projects = [
		{
			title: 'Smart Car Comparison & Recommendation System',
			desc: 'AI-powered platform to compare cars, analyze market trends, and recommend vehicles based on user preferences.',
			tech: ['SvelteKit', 'Python', 'MongoDB', 'ML'],
			link: 'https://github.com/hafyze/Degree_FYP',
			type: 'Web App (FYP)'
		},
		{
			title: 'Malaysia Vehicle Registration Analytics Dashboard',
			desc: 'A web-based analytics dashboard that visualizes monthly Malaysian vehicle registration data from government sources, providing interactive charts, filtering, and trend insights.',
			tech: ['SvelteKit', 'Data Visualization', 'Public API'],
			link: 'https://github.com/hafyze/gov-data-car',
			type: 'Web App'
		},
        {
			title: 'Online Detailing Booking Platform',
            desc: 'A web-based booking system for car detailing services, allowing customers to schedule appointments, select service packages, and manage bookings in real-time. Includes admin dashboard for service management and booking tracking.',
			tech: ['SvelteKit', 'Tailwind', 'TypeScript', 'MongoDB', 'Vercel'],
			link: 'https://my-detailer.vercel.app/booking',
			type: 'Web App'
		},
		{
			title: 'Roomstay Booking Website',
			desc: 'Modern booking platform focused on clean UI, performance, and SEO optimization.',
			tech: ['SvelteKit', 'Tailwind', 'Vercel'],
			link: 'https://www.narkg.com/',
			type: 'Web App'
		},
		{
			title: 'Online Car Marketplace',
			desc: 'Modern booking platform focused on clean UI, performance, and SEO optimization.',
			tech: ['SvelteKit', 'Tailwind', 'Vercel'],
			link: 'https://car-lists.vercel.app/',
			type: 'Web App'
		},
		{
			title: 'Expense Tracking Mobile Application',
			desc: 'A hybrid mobile app for recording and analyzing personal expenses, offering category-based tracking and spending insights using a SvelteKit and Capacitor stack.',
			tech: ['SvelteKit', 'Capacitor', 'TailwindCSS'],
			link: 'https://github.com/hafyze/spending-tracker',
			type: 'Mobile App'
		}
	];