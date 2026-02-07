export interface Director {
    id: string;
    name: string;
    designation: string;
    bio: string;
    image: string;
    linkedIn?: string;
}

export const directors: Director[] = [
    {
        id: '1',
        name: 'Abhinay Tiwari',
        designation: 'Director',
        bio: 'Abhinay Tiwari is a Director of Nandpur Constructions Private Limited (NCPL), bringing strategic vision and operational excellence to the company. Under his leadership, NCPL has successfully delivered critical infrastructure projects across Bihar and Jharkhand, earning recognition for quality execution and timely completion. His hands-on approach and commitment to excellence have been instrumental in establishing NCPL as a trusted name in road construction.',
        image: '/images/director-abhinay.jpg',
        linkedIn: '#',
    },
    {
        id: '2',
        name: 'Gaurav Singh',
        designation: 'Director',
        bio: 'Gaurav Singh serves as a Director at Nandpur Constructions Private Limited (NCPL), contributing his expertise in project management and business development. His focus on innovation and quality has helped NCPL adopt modern construction techniques and equipment. Gaurav plays a key role in client relationships and ensuring that projects meet the highest standards of quality and safety.',
        image: '/images/director-gaurav.jpg',
        linkedIn: '#',
    },
];
