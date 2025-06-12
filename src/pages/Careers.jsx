import React from 'react'
import { Heading } from '../components/Heading'
import { JobCard } from '../components/JobCard'

const Careers = () => {


    const jobs = [
        {
            title: 'Videographer',
            workTime: 'Full-Time',
            location: 'Dubai, United Arab Emirates',
        },
        {
            title: 'Short-Form Video Editor',
            workTime: 'Full-Time',
            location: 'Remote',
        },
    ];

    return (
        <div className="pt-44 animate-gradient px-4 py-16 sm:px-6 lg:px-32">
            <Heading
                title="Careers"
                description="Join our team and shape the future of personal branding. At The Clips Agency, we empower creativity, collaboration, and growth. Explore opportunities to make an impact with us!"
            />
            <div className="min-h-screen mt-10 p-4 md:p-12 space-y-8">
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </div>
    )
}

export default Careers
