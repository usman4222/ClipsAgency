export default function SignatureVideoSection() {
  return (
    <section className=" bg-[#080617] px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="mb-8 md:mb-6 text-4xl md:text-[61px] md:leading-[67px] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Stand out with <br /> signature videos
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-400 md:text-lg">
            Everyone’s videos look the same. Except yours. Because you’re not
            like everyone else. You’re not average.
          </p>
          s
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              {/* <img src={Box} alt="img" className="w-32 h-32" /> */}
              {/* <Box className="h-16 w-16 text-purple-400" strokeWidth={1} /> */}
            </div>
            <h2 className="mb-4 text-xl font-bold text-white md:text-3xl">
              Start showing up differently
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              Ditch the generic editing style, stand out and become easily
              recognized with a uniquely branded & consistent visual experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center"></div>
            <h2 className="mb-4 text-xl font-bold text-white md:text-3xl">
              Work with an expert team you can trust.
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              Stop dealing with freelancers who are learning on the job. Save a
              headache trying to look for good talent, we train the best.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              {/* <Diamond className="h-16 w-16 text-purple-400" strokeWidth={1} /> */}
            </div>
            <h2 className="mb-4 text-xl font-bold text-white md:text-3xl">
              No more editing and feedback headaches.
            </h2>
            <p className="mx-auto max-w-sm text-gray-400">
              No more spending hours on countless revisions. Less revisions,
              better videos that 5x your engagement and views.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
