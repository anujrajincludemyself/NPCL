import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-900/5 rounded-full blur-3xl" />

            {/* Mobile Image Section - Compact hero image on mobile */}
            <div className="relative lg:hidden pt-20">
                <div className="relative h-[40vh] min-h-[300px] max-h-[400px]">
                    <Image
                        src="/images/highway-construction.png"
                        alt="Highway construction project"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-gray-50" />
                    
                    {/* Text Overlay - Mobile */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full mb-3">
                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-amber-700">25+ Years of Excellence</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                            Building Roads That
                            <span className="block text-amber-400">Connect India</span>
                        </h2>
                        <p className="text-sm text-white/90 max-w-md">
                            2,500+ KM of World-Class Infrastructure
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-32 pb-12 lg:pb-20 lg:min-h-screen lg:flex lg:items-center">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    {/* Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full mb-4 lg:mb-6">
                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="text-xs lg:text-sm font-medium text-amber-700">25+ Years of Excellence</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            Building Roads That
                            <span className="block text-amber-500">Connect India</span>
                        </h1>

                        <p className="mt-3 lg:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            NCPL is a premier civil road construction company specializing in highways,
                            expressways, bridges, and urban infrastructure. We deliver world-class projects
                            that stand the test of time.
                        </p>

                        {/* Motto Banner */}
                        <div className="mt-4 lg:mt-8 p-3 lg:p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl">
                            <p className="text-sm sm:text-base lg:text-xl font-semibold text-gray-900 italic">
                                "Building Tomorrow's Infrastructure, Today"
                            </p>
                            <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-gray-600">
                                Connecting communities, driving progress, building the future.
                            </p>
                        </div>

                        <div className="mt-5 lg:mt-8 flex flex-col sm:flex-row gap-3 lg:gap-4">
                            <Button href="/projects" size="lg">
                                View Our Projects
                            </Button>
                            <Button href="/contact" variant="outline" size="lg">
                                Get In Touch
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 lg:mt-12 flex flex-wrap items-center gap-4 lg:gap-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs lg:text-sm text-gray-600">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs lg:text-sm text-gray-600">Govt. Approved</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Hero Image - Hidden on mobile */}
                    <div className="relative hidden lg:block">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/highway-construction.png"
                                alt="Highway construction project"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1200px) 50vw, 600px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            
                            {/* Text Overlay - Desktop */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-4">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-amber-700">25+ Years of Excellence</span>
                                </div>
                                <h2 className="text-3xl xl:text-4xl font-bold leading-tight mb-2">
                                    Building Roads That
                                    <span className="block text-amber-400">Connect India</span>
                                </h2>
                                <p className="text-base text-white/90">
                                    2,500+ KM of World-Class Infrastructure
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
