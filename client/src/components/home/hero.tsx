import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="mt-20 flex w-full flex-col-reverse items-center justify-center space-x-10 lg:flex-row">
      <div className="text-left md:w-3/6">
        <h1 className="my-4 flex-wrap text-3xl font-extrabold leading-none tracking-tight text-[#226cff] md:text-5xl xl:text-7xl">
          Your Dream Post
        </h1>
        <h2 className="my-12 flex-wrap text-lg font-bold leading-none tracking-tight text-gray-900 lg:text-2xl xl:text-3xl">
          Unleash your social media potential with{" "}
          <span className="text-[#226cff]">Post IT.</span> - the AI-powered
          content generator for captions, images, and hashtags.
        </h2>
        <Link href="/featured">
          <button className="mt-5 rounded-full bg-blue-500 px-6 py-3 text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Get Started
          </button>
        </Link>
      </div>
      <img
        src="/heroImage.svg"
        alt="Hero"
        className="h-full w-2/3 p-5 md:w-1/3"
      />
    </div>
  );
};

export default Hero;
