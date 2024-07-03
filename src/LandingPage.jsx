import Banner from "./components/LandingPage/HeaderSection/Banner";
import PatientCareOverview from "./components/LandingPage/HeaderSection/PatientCareOverview";
import Navbar from "./components/Navbar/Navbar";

const colors = ["#C1D5DE", "#C7DBE5", "#E2F5FF", "#F1FAFF"];
const numRows = 10; // Define the number of rows
const numCols = 10; // Define the number of columns

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const LandingPage = () => {
  return (
    <div className="bg-[#E5F6FF]">
      {/* header section */}
      <header className="absolute inset-0 bg-[radial-gradient(circle_1800px_at_50%_200px,white,transparent)] space-y-8 overflow-x-hidden">
        <div className="absolute inset-0 -z-10 size-full bg-white">
          <div className="absolute opacity-90 top-32 grid grid-cols-12 grid-rows-10 h-[700px] w-full gap-0">
            {Array.from({ length: numRows * numCols }).map((_, idx) => (
              <div
                key={idx}
                className="size-48"
                style={{ backgroundColor: getRandomColor() }}
              ></div>
            ))}
          </div>
        </div>
        <Navbar />
        <Banner />
        <PatientCareOverview />
      </header>
    </div>
  );
};

export default LandingPage;
