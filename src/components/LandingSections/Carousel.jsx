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
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7867aba77299709fc7fa_Svenja.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7153f2cc4ec8df51ef70_Ninad%20-%20The%20Healthy%20Office.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6fe0639f18a8d6073fb2_Ajmal%20Perfumes%20-Processing%20techniques%20of%20Oud.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70a8f013b880e870e41f_Dr%20Vivien%20-%20History%20of%20Plastic%20Surgery.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b781fb59f6f8d368492ac_Rafif.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6ff7723d51118aedc820_Carine%20Boury%20-%20%20Why%20employees%20fighting%20a%20good%20sign.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71a2f2cc4ec8df5236e5_Steve%20Hill%20-%20when%20you%20hear%20dubai.gif',
    'https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b782c827be802385c54fb_Rakan.gif'
  ];

  return (
    <div className=" leading-normal tracking-wide">
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