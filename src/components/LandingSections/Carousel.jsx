import React, { useState } from 'react';

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70b864fa55b3aadadfab_Entropy-Building%20Resilience%20Through%20Martial%20Arts.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7149cb7793071bbde701_Mahmood%20Bartawi%20-%20Hot%20Seat%20Exercise.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7126074b4f4921ec1793_Khaled%20Bartawi%20-%20Hypoxia%20With%20Pilots.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70411982de8ef1a7dad9_Dr-Diana%20-%20Treat%20your%20toothbrush%20as%20a%20VIP%20Tool.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70343552187b99f54164_Dr%20Medhat-%20Signs%20of%20Toungue%20Tie.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b78476188322f33779499_Sumaya.gif',
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
          {[...images, ...images].map((src, index) => ( 
            <div
              key={index}
              className="carousel-focus flex items-center flex-col relative my-10 px-4 py-3 rounded-lg shadow-lg  md:w-[270px]"
              // style={{ width: '270px' }}
            >
              <img 
                className="w-[150px] h-[300px] md:w-[250px] md:h-[400px] object-cover rounded-2xl" 
                src={src}
                alt={`Gif ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;