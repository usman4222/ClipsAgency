import React, { useState } from 'react';
import img1 from "../../images/DrVivien.jpg";
import SuccessStoryCard from '../SuccessStoryCard';

const SuccessStoriesCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Store the data for each SuccessStoryCard
    const successStories = [
        {
            imageSrc: img1,
            name: "Dr Vivien Moris",
            title: "Plastic Surgeon",
            followersCount: "137k+",
            followersGained: "136K+",
            viewCount: "13M+",
            testimonialText: "This is an amazing company. They helped me with the content ideas and the results are amazing.",
            videoUrl: "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479"
        },
        {
            imageSrc: img1,
            name: "Dr Vivien Moris",
            title: "Plastic Surgeon",
            followersCount: "137k+",
            followersGained: "136K+",
            viewCount: "13M+",
            testimonialText: "This is an amazing company. They helped me with the content ideas and the results are amazing.",
            videoUrl: "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479"
        },
        {
            imageSrc: img1,
            name: "Dr Vivien Moris",
            title: "Plastic Surgeon",
            followersCount: "137k+",
            followersGained: "136K+",
            viewCount: "13M+",
            testimonialText: "This is an amazing company. They helped me with the content ideas and the results are amazing.",
            videoUrl: "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479"
        },
        {
            imageSrc: img1,
            name: "Dr Vivien Moris",
            title: "Plastic Surgeon",
            followersCount: "137k+",
            followersGained: "136K+",
            viewCount: "13M+",
            testimonialText: "This is an amazing company. They helped me with the content ideas and the results are amazing.",
            videoUrl: "https://player.vimeo.com/video/1024229575?badge=0&autopause=0&player_id=0&app_id=58479"
        }
    ];


    return (
        <div className="bg-[#080617] leading-normal tracking-wide">
            <div className=" mx-auto w-full overflow-hidden relative">
                <div className="w-full h-full absolute">
                    <div className="w-1/4 h-full absolute z-50 left-0"></div>
                    <div className="w-1/4 h-full absolute z-50 right-0"></div>
                </div>

                <div
                    className={`carousel-items flex items-center justify-center ${isHovered ? 'pause-animation' : ''}`}
                    style={{ width: 'fit-content' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="carousel-focus flex items-center flex-col relative my-10 px-4 py-3 rounded-lg shadow-lg"

                        >
                            <SuccessStoryCard
                                imageSrc={story.imageSrc}
                                name={story.name}
                                title={story.title}
                                followersCount={story.followersCount}
                                followersGained={story.followersGained}
                                viewCount={story.viewCount}
                                testimonialText={story.testimonialText}
                                videoUrl={story.videoUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesCarousel;
