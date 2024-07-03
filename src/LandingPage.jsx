import Banner from "./components/LandingPage/HeaderSection/Banner";
import PatientCareOverview from "./components/LandingPage/HeaderSection/PatientCareOverview";
import Navbar from "./components/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="bg-[#FBFBFB]">
      {/* header section */}
      <header className="relative z-50 bg-[#C7DBE5]">
        <Navbar />
        <Banner />
        <PatientCareOverview />
        <img src="/Group 21.png" className="absolute -top-52 -z-10 w-2/3" alt="" />
      </header>
    </div>
  );
};

export default LandingPage;
