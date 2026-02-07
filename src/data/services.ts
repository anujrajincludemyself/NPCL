export interface Service {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    icon: string;
    features: string[];
}

export const services: Service[] = [
    {
        id: '1',
        title: 'Highway Construction',
        description: 'We specialize in building world-class highways that connect cities and drive economic growth across Bihar and Jharkhand regions.',
        fullDescription: 'NCPL specializes in building world-class highways that connect cities and drive economic growth. Our highways are engineered for durability, safety, and optimal traffic flow. With over a decade of experience in challenging terrains, we handle everything from initial surveying to final handover, ensuring compliance with MORTH and NHAI standards.',
        icon: 'highway',
        features: [
            'National & State highways',
            'Multi-lane road construction',
            'Advanced drainage systems',
            'Quality bituminous surfacing',
        ],
    },
    {
        id: '2',
        title: 'Building Construction',
        description: 'Constructing robust commercial and infrastructure buildings with modern techniques and quality materials.',
        fullDescription: 'NCPL delivers comprehensive building construction services for commercial, institutional, and infrastructure facilities. Our expertise includes RCC structures, steel buildings, and modern construction techniques. We ensure timely completion while maintaining the highest quality standards and safety protocols.',
        icon: 'building',
        features: [
            'Commercial buildings',
            'Institutional structures',
            'Industrial facilities',
            'RCC & steel structures',
        ],
    },
    {
        id: '3',
        title: 'Flyovers & Bridges',
        description: 'Engineering remarkable flyovers and bridges that overcome geographical challenges and improve connectivity.',
        fullDescription: 'Our bridge and flyover construction expertise spans various types of structures from simple span bridges to complex multi-level flyovers. We use advanced construction methods including pre-stressed concrete, steel structures, and modern falsework systems to ensure structural integrity and longevity.',
        icon: 'bridge',
        features: [
            'Multi-level flyovers',
            'Box girder bridges',
            'Road over-bridges (ROB)',
            'Pre-stressed concrete structures',
        ],
    },
    {
        id: '4',
        title: 'Urban Infrastructure',
        description: 'Developing modern urban infrastructure including sewage treatment plants and comprehensive landscaping solutions.',
        fullDescription: 'NCPL provides complete urban infrastructure solutions including sewage treatment plants, storm water drainage, and landscaping. Our integrated approach ensures sustainable urban development with minimal environmental impact. We specialize in creating green spaces and efficient waste management systems.',
        icon: 'urban',
        features: [
            'Sewage treatment plants',
            'Storm water drainage',
            'Landscaping & beautification',
            'Underground utilities',
        ],
    },
    {
        id: '5',
        title: 'Road Maintenance',
        description: 'Comprehensive maintenance services to extend the life of existing infrastructure and ensure continued safety.',
        fullDescription: 'Our road maintenance division provides routine and emergency maintenance services to keep roads in optimal condition. We use modern techniques including micro-surfacing, crack sealing, and pothole patching to extend road life and maintain safety standards.',
        icon: 'maintenance',
        features: [
            'Routine maintenance',
            'Emergency repairs',
            'Road resurfacing',
            'Preventive treatments',
        ],
    },
    {
        id: '6',
        title: 'Project Consulting',
        description: 'Expert consulting services for infrastructure projects with technical guidance and quality assurance.',
        fullDescription: 'NCPL offers comprehensive project consulting services including feasibility studies, detailed project reports (DPR), and quality assurance. Our experienced team provides technical expertise to ensure project success from conception to completion.',
        icon: 'consulting',
        features: [
            'Feasibility studies',
            'DPR preparation',
            'Quality assurance',
            'Project monitoring',
        ],
    },
];
