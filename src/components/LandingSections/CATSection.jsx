export default function CTASection() {
    return (
      <section className="relative min-h-[60vh] overflow-hidden px-4 pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#080617]" />
  
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-6 text-base text-gray-200 md:text-lg">Take your brand to the next level</p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-5xl xl:text-6xl">
            Have Some Questions?
            <br />
            Get In Touch
          </h2>
          <button className="rounded-2xl bg-[#e7fe54] px-4 py-1 md:px-6 md:py-2 text-base font-semibold text-gray-900 transition-all cursor-pointer hover:shadow-lg md:text-lg">
            Book a call
          </button>
        </div>
      </section>
    )
  }
  
  