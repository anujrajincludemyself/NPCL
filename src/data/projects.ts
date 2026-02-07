export interface Project {
    id: string;
    name: string;
    location: string;
    type: string;
    description: string;
    image: string;
    year: string;
    length?: string;
    duration?: string;
    learnings?: string[];
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Sahibganj Highway Project',
        location: 'Sahibganj, Jharkhand',
        type: 'Highway',
        description: 'Major highway construction project connecting Sahibganj to key regional hubs, featuring modern road infrastructure and drainage systems.',
        image: '/images/sahibganj-highway.jpeg',
        year: '2025',
        duration: 'June 2025 - September 2025',
        learnings: [
            'Successfully managed monsoon season construction challenges',
            'Implemented advanced water drainage systems for flood-prone areas',
            'Coordinated with local communities for smooth project execution',
            'Optimized material sourcing from nearby regions to reduce costs'
        ],
    },
    {
        id: '2',
        name: 'Farakka Road Development',
        location: 'Farakka, West Bengal',
        type: 'Highway',
        description: 'Strategic road development project enhancing connectivity to Farakka Barrage and surrounding industrial areas.',
        image: '/images/farakka-road.jpeg',
        year: '2025',
        duration: 'June 2025 - September 2025',
        learnings: [
            'Dealt with high water table conditions near barrage area',
            'Implemented soil stabilization techniques for marshy terrain',
            'Maintained traffic flow during construction in busy industrial zone',
            'Enhanced safety protocols for working near water bodies'
        ],
    },
    {
        id: '3',
        name: 'Ranchi Urban Infrastructure',
        location: 'Ranchi, Jharkhand',
        type: 'Urban Roads',
        description: 'Comprehensive urban road network development in Jharkhand\'s capital, including modern street lighting and pedestrian facilities.',
        image: '/images/ranchi-urban.jpeg',
        year: '2025-2026',
        duration: 'October 2025 - March 2026',
        learnings: [
            'Integrated smart traffic management systems',
            'Coordinated with multiple municipal departments for utility management',
            'Minimized disruption to daily urban life during construction',
            'Implemented sustainable urban drainage solutions'
        ],
    },
    {
        id: '4',
        name: 'Rajauli Construction Project',
        location: 'Rajauli, Bihar',
        type: 'Highway',
        description: 'Critical infrastructure project improving road connectivity in Rajauli region with focus on rural development.',
        image: '/images/rajauli-construction.jpeg',
        year: '2026',
        duration: 'January 2026 - April 2026',
        learnings: [
            'Developed efficient construction methods for rural terrain',
            'Created local employment opportunities during project execution',
            'Overcame challenges of limited infrastructure in remote areas',
            'Established quality control measures with limited local resources'
        ],
    },
];

export const featuredProjects = projects.slice(0, 4);
