import React from 'react'

const VideoSection = () => {
    return (
        <div className='flex justify-center bg-[#080617] '>
            <div className="overflow-hidden py-16">
                <iframe
                    src=" https://player.vimeo.com/video/1023694654?badge=0&autopause=0&player_id=0&app_id=58479"
                    alt="Dr Vivien Case Study"
                    className="h-[650px] w-[100vw] object-cover  "
                />
            </div>
        </div>
    )
}

export default VideoSection
