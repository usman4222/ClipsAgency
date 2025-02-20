// import { useEffect, useState } from "react"
// import useEmblaCarousel, * as EmblaCarousel from 'embla-carousel-react';
// import Autoplay from "embla-carousel-autoplay" // Autoplay plugin import

// const cards = [
//   {
//     title: "Not Able To Manage Our Emotions",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8gx8KL7AZE1pqr0KjjdxDMJ8ZYm3U.png",
//     bgColor: "bg-[#FFB088]",
//   },
//   {
//     title: "WHEN YOU HEAR",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8gx8KL7AZE1pqr0KjjdxDMJ8ZYm3U.png",
//     bgColor: "bg-[#2A2A2A]",
//   },
//   {
//     title: "To Buy A Property In Dubai",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8gx8KL7AZE1pqr0KjjdxDMJ8ZYm3U.png",
//     bgColor: "bg-[#1A1A2E]",
//   },
//   {
//     title: "To Make Logo Bigger",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8gx8KL7AZE1pqr0KjjdxDMJ8ZYm3U.png",
//     bgColor: "bg-white",
//   },
//   {
//     title: "Nutrition Facts",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K8gx8KL7AZE1pqr0KjjdxDMJ8ZYm3U.png",
//     bgColor: "bg-gray-100",
//   },
// ]

// export default function AutoCarousel() {
//   const [emblaApi, setEmblaApi] = useState(null)
  
//   const [emblaRef] = useEmblaCarousel({
//     loop: true,
//     align: "start",
//     slidesToScroll: 1,
//     dragFree: true,
//     // Autoplay plugin should be initialized here if required
//     plugins: [Autoplay({ delay: 3000 })],
//   })

//   useEffect(() => {
//     if (!emblaApi) return

//     // Reset carousel to beginning after the last slide
//     emblaApi.on("select", () => {
//       const lastSlide = emblaApi.selectedScrollSnap() === emblaApi.scrollSnapList().length - 1
//       if (lastSlide) {
//         setTimeout(() => {
//           emblaApi.scrollTo(0)
//         }, 3000) // Delay for resetting
//       }
//     })
//   }, [emblaApi])

//   return (
//     <div className="bg-[#0B0B14] px-4 py-16">
//       <div className="embla" ref={emblaRef}>
//         <div className="embla__container">
//           {cards.map((card, index) => (
//             <div key={index} className="embla__slide md:basis-1/2 lg:basis-1/3">
//               <div className="p-1">
//                 <div className={`${card.bgColor} relative aspect-[9/16] overflow-hidden rounded-2xl`}>
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

//                   {/* Content */}
//                   <div className="relative z-10 p-6">
//                     <h3 className="text-xl font-bold text-white md:text-2xl">{card.title}</h3>
//                   </div>

//                   {/* Image */}
//                   <img
//                     src={card.image} // Dynamically load image based on card data
//                     alt={card.title}
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
