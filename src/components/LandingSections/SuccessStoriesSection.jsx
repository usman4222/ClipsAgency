import React from 'react'
import { Heading } from '../Heading'
import SuccessStoriesCarousel from './SuccessStoriesCarousel'

const SuccessStoriesSection = () => {
    return (
        <div className='bg-[#080617] pt-20'>
            <Heading
                title="Success Stories"
                description="Clients don't just love us because we save them time. It's because we also get them results."
            />
            <div className='flex justify-center pb-20 bg-[#080617]'>
                <button className="rounded-2xl bg-[#f5d1ff] px-6 py-1 md:px-8 md:py-2 text-base font-semibold text-gray-900 transition-colors hover:bg-purple-300 md:text-lg">
                    View All Clients Success
                </button>
            </div>
            <div className='pb-20'>
                <SuccessStoriesCarousel />
            </div>
        </div>
    )
}

export default SuccessStoriesSection
