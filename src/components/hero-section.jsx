// import { ArrowRight, Bot } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import myImage from '../assets/images/home.png'; 
// import { motion } from "framer-motion";
// import { MarketInsightsSlider } from "./MarketInsightsSlider"; // Import the separated component

// // export default function HeroSection() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="relative min-h-screen pt-16 bg-white">
// //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
// //           {/* Left side content */}
// //           <div className="space-y-8">
// //             <motion.h1
// //               className="text-4xl font-bold md:text-6xl leading-tight mb-6 bg-gradient-to-r from-pink-400 50% via-purple-500 50% to-violet-600 bg-clip-text text-transparent"
// //               initial={{ opacity: 0, x: -50 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 1 }}
// //             >
// //               AI-Powered Stock Market Insights Sentiment Analysis!
// //             </motion.h1> 
            
// //             <p className="text-xl text-black">
// //               Harness AI-powered insights and stay ahead of market moves before they happen.
// //             </p>

// //             {/* Buttons */}
// //             <div className="flex flex-wrap gap-4 mb-10">
// //               <button 
// //                 className="px-8 py-3 bg-[#0096FF] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#a61ad9]/90 transition-colors"
// //                 onClick={() => navigate('/news-feed')}
// //               >
// //                 Start Analyzing
// //                 <ArrowRight size={20} />
// //               </button>
// //               <button 
// //                 className="px-8 py-3 border border-[#0096FF] text-[#0096FF] rounded-lg font-medium flex items-center gap-2 hover:bg-[#0096FF]/10 transition-colors"
// //                 onClick={() => navigate('/chatbot')}
// //               >
// //                 Ask Our Assistant
// //                 <Bot size={20} />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Right side image */}
// //           <div className="flex justify-end">
// //             <img 
// //               src={myImage}
// //               alt="Sentiment Analysis"
// //               className="w-96 h-auto transform scale-150 rounded-2xl"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Add the Market Insights Slider below */}
// //       <MarketInsightsSlider />
// //     </div>
// //   );
// // }


// export default function HeroSection() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen pt-16 bg-white">
//       {/* Apply grid-bg behind the hero section */}
//       <div className="grid-bg absolute inset-0 z-0"></div>

//       {/* Hero Section: Occupying first half of the page */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-50 flex flex-col justify-center items-center min-h-screen"> 
//         {/* This sets the hero section to occupy 50% height of the viewport */}
//         <div className="text-center space-y-8">
//           <motion.h1
//             className="text-4xl font-bold md:text-6xl leading-tight mb-6 bg-gradient-to-r from-pink-400 50% via-purple-500 50% to-violet-600 bg-clip-text text-transparent"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             AI-Powered Stock Market Insights Sentiment Analysis!
//           </motion.h1>

//           <p className="text-xl text-black">
//             Harness AI-powered insights and stay ahead of market moves before they happen.
//           </p>

//           {/* Centered Buttons */}
//           <div className="flex flex-wrap gap-4 justify-center mt-8">
//             <button 
//               className="px-8 py-3 bg-[#0096FF] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#a61ad9]/90 transition-colors"
//               onClick={() => navigate('/news-feed')}
//             >
//               Start Analyzing
//               <ArrowRight size={20} />
//             </button>
//             <button 
//               className="px-8 py-3 border border-[#0096FF] text-[#0096FF] rounded-lg font-medium flex items-center gap-2 hover:bg-[#0096FF]/10 transition-colors"
//               onClick={() => navigate('/chatbot')}
//             >
//               Ask Our Assistant
//               <Bot size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Add the Market Insights Slider below */}
//       <MarketInsightsSlider />
//     </div>
//   );
// }

import { ArrowRight, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
import technologyLogo from '../assets/images/technology.png'; 
import { motion } from "framer-motion";
import { MarketInsightsSlider } from "./MarketInsightsSlider";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[700px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[100px]"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-50 flex flex-col justify-center items-center min-h-screen"> {/* Increased pt-20 to pt-28 */}
        <div className="text-center space-y-8">
          {/* Logo */}
          <img src={technologyLogo} alt="Drstikon AI Logo" className="h-24 mx-auto mt-8" /> {/* Added mt-8 to create space */}

          <motion.h1
            className="text-6xl md:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            AI-Powered <span className="text-black-500">Stock Market</span> <br />
            <span className="text-blue-500">Insights  and Sentiment</span>  <br /> 
            Analysis!
          </motion.h1>

          <p className="text-xl text-black">
            Harness AI-powered insights and stay ahead of market moves before they happen!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button 
              className="px-8 py-3 bg-[#0096FF] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#a61ad9]/90 transition-colors"
              onClick={() => navigate('/news-feed')}
            >
              Start Analyzing
              <ArrowRight size={20} />
            </button>
            <button 
              className="px-8 py-3 border border-[#0096FF] text-[#0096FF] rounded-lg font-medium flex items-center gap-2 hover:bg-[#a61ad9]/10 transition-colors"
              onClick={() => navigate('/chatbot')}
            >
              Ask Our Assistant
              <Bot size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Market Insights Slider */}
      <MarketInsightsSlider />
    </div>
  );
}

