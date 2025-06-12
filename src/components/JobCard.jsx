export const JobCard = ({ title, workTime, location }) => {
  return (
    <div className="bg-gray-100 hover:bg-[#F5D1FF] ease-in-out rounded-lg p-6 shadow-md">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between w-full">
          <h2 className="text-[30px] font-bold leading-[37px] text-gray-900">{title}</h2>
          <button className="bg-pink-200 text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-pink-300 transition">
            Apply Now
          </button>
        </div>
        <div className="mt-4 flex flex-col md:flex-row md:space-x-16">
          <div>
            <p className="font-semibold text-gray-700">Work Time:</p>
            <p className="text-gray-900">{workTime}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Location:</p>
            <p className="text-gray-900">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};