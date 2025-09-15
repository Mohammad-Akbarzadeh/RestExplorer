import { useNavigate } from "react-router-dom";
import HomePageimg from "../Images/HomePage.webp";

export default function HomePage() {
  const navigate = useNavigate();
  const handleCountriesClick = () => {
    navigate("/countries");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };


  return (
    <div className="flex items-center justify-center px-2 gap-5 mt-10 lg:mt-46 ">
      <div className="flex flex-col items-baseline justify-center gap-y-10 py-20 px-1 sm:w-1/2 lg:w-1/3">
        <h1 className="text-5xl font-bold">
          Explore Countries with{" "}
          <span className="text-blue-700">Real-Time Data</span>
        </h1>
        <p className="text-xm text-gray-800">
          Discover details about every country around the world – from capitals
          to regions!
        </p>
        <div className="flex gap-x-5 items-center">
          <button onClick={handleCountriesClick} className="bg-blue-600 hover:bg-blue-700 flex text-white py-3 px-5.5 text-[20px] rounded-2xl items-center gap-1">
            {" "}
            Explore Now{" "}
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>{" "}
          </button>
          <button onClick={handleAboutClick} className="bg-gray-400 hover:bg-gray-500 flex text-white py-3 px-4.5 text-[20px] rounded-2xl">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={HomePageimg}
        alt="HomePageimg"
        className="sm:w-1/2 lg:w-1/3 rounded-2xl"
      />
    </div>
  );
}
