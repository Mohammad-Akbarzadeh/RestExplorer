export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-17 px-16 py-8 sm:px-24 sm:py-12 lg:w-2/3 lg:m-auto">
      <h1 className="text-4xl font-bold">About Thid Website</h1>
      <p className="text-xl text-gray-700">
        This website uses the <span className="text-blue-500 font-semibold">REST Countries API</span>to display comprehensive
        information about countries from around the world. Explore our data to
        learn about country names, capitals, regions, populations, flags, and
        much more. <br /> <br />
         Whether you’re curious about a particular country or looking
        for insights about global regions, our interactive explorer makes it
        easy. <br /> <br /> Our goal is to build a fully responsive and modern web application
        using the latest technologies, including React Router v7 for seamless
        routing and Tailwind CSS for a beautiful, responsive user interface.
      </p>
    </div>
  );
}
