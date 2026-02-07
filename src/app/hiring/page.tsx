import { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Careers - NCPL',
    description: 'Join our team at NCPL and help build the infrastructure of tomorrow.  Explore career opportunities in construction.',
};

export default function HiringPage() {
    const openPositions = [
        {
            title: 'Site Engineer',
            department: 'Engineering',
            location: 'Bihar/Jharkhand',
            type: 'Full-time',
        },
        {
            title: 'Project Manager',
            department: 'Management',
            location: 'Ranchi',
            type: 'Full-time',
        },
        {
            title: 'Quality Control Inspector',
            department: 'Quality Assurance',
            location: 'Various Sites',
            type: 'Full-time',
        },
        {
            title: 'Equipment Operator',
            department: 'Operations',
            location: 'Bihar/Jharkhand',
            type: 'Contract',
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section background="gray">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                        <span className="text-sm font-medium text-amber-700">Join Our Team</span>
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Build Your Career with NCPL
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Be part of a team that's building the infrastructure of tomorrow. We're looking for passionate
                        individuals who share our commitment to excellence and quality.
                    </p>
                </div>
            </Section>

            {/* Why Join Us */}
            <Section>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                        <p className="text-gray-600">
                            Continuous learning and career advancement in a growing company
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                        <p className="text-gray-600">
                            We believe in maintaining a healthy balance between work and personal life
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                        <p className="text-gray-600">
                            Comprehensive compensation package and benefits for our team members
                        </p>
                    </div>
                </div>
            </Section>

            {/* Open Positions */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
                    <div className="space-y-4">
                        {openPositions.map((position, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {position.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {position.location}
                                            </span>
                                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Application Section */}
            <Section>
                <div className="max-w-2xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-amber-200">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
                        <p className="text-gray-700">
                            We're always looking for talented individuals to join our team. Send us your application and
                            we'll get back to you soon.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Apply</h3>
                        <div className="space-y-4 text-gray-700">
                            <p className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">1.</span>
                                <span>Prepare your resume highlighting your relevant experience</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">2.</span>
                                <span>Include a cover letter explaining why you'd like to join NCPL</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">3.</span>
                                <span>
                                    <strong>Email your application to:</strong>{' '}
                                    <a href="mailto:ncplorg@outlook.com" className="text-amber-600 hover:text-amber-700 underline">
                                        ncplorg@outlook.com
                                    </a>
                                </span>
                            </p>
                            <p className="flex items-start gap-3">
                                <span className="text-amber-500 font-bold">4.</span>
                                <span>Mention the position you're applying for in the subject line</span>
                            </p>
                        </div>

                        <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                                <strong>Note:</strong> Google Form integration coming soon! For now, please send applications directly to our email.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
