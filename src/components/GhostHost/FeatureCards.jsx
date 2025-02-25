import { motion } from "framer-motion"; 
import { FaClock, FaChartLine, FaStar } from "react-icons/fa";

const FeatureCards = () => {
  return (
    <div className="bg-[#F5D1FF] to-black mx-8 rounded-2xl px-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-10">
        {/* Card 1 */}
        <motion.div
          className="p-2 lg:p-6 rounded-lg flex flex-col items-start h-full"
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <FaClock className="text-2xl mb-2" />
          <h2 className="text-[27px] leading-[34px] font-bold mb-1">
            Win back your time. Focus <br className="lg:block hidden" /> on your business
          </h2>
          <p className="text-[15px] leading-[17px]">Automate your content creation.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-2 lg:p-6 rounded-lg flex flex-col items-start"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <FaChartLine className="text-2xl mb-2" />
          <h2 className="text-[27px] leading-[34px] font-bold mb-1">
            Grow on all social media <br className="lg:block hidden" /> channels
          </h2>
          <p className="text-[15px] leading-[17px] font-semibold">Get seen everywhere.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="p-2 lg:p-6 rounded-lg flex flex-col items-start"
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} 
          viewport={{ once: true }} 
        >
          <FaStar className="text-2xl mb-2" />
          <h2 className="text-[27px] leading-[34px] font-bold mb-1">
            Get more leads to your <br className="lg:block hidden" /> business
          </h2>
          <p className="text-[15px] leading-[17px] font-semibold">
            Automate your content creation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCards;