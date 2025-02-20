export default function Podcasts() {
    const content = [
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b6fcca361098e538030ca_Abe%20Jr%20-%20Power%20of%20Gut%20Feeling.gif",
        text: "This is how bad",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b70343552187b99f54164_Dr%20Medhat-%20Signs%20of%20Toungue%20Tie.gif",
        text: "Visited several",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b77f6a7debae6b88f6f66_gigi.gif",
        text: "BROKE THE INTERNET",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b780a1bfb8cf857671e03_Lindesy.gif",
        text: "After the age of 50",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71332fb9301d7e51c972_Khalifa%20-%20Tesla%20Admiration.gif",
        text: "Content 1",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b713e842917ec483ebf4f_Lamar-Who%20Is%20Your%20ICP.mp4.gif",
        text: "Content 2",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b71a2f2cc4ec8df5236e5_Steve%20Hill%20-%20when%20you%20hear%20dubai.gif",
        text: "Content 3",
      },
      {
        image:
          "https://cdn.prod.website-files.com/67025756be96d71592e4ec86/672b7126074b4f4921ec1793_Khaled%20Bartawi%20-%20Hypoxia%20With%20Pilots.gif",
        text: "After the age of 50",
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#080617] px-4 py-16">
        <div className="mx-auto px-32 space-y-8">
          {/* Unified Grid - 4 on top, 4 on bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {content.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt="img"
                  className="h-full w-[300px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
  
          {/* Button */}
          <div className="flex justify-center pb-20 bg-[#080617] mt-32">
            <button className="rounded-2xl bg-[#f5d1ff] px-6 py-2 md:px-8 md:py-3 text-base font-semibold text-gray-900 transition-colors hover:bg-purple-300 md:text-lg cursor-pointer">
              Explore More of Our Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }
  