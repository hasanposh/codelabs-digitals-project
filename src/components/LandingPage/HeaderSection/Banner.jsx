import homeBanner from "/Rectangle 5.png";

const Banner = () => {
  return (
    <div
      className="max-w-[1160px] mx-auto h-[470px] rounded-[48px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, #00C19D20, #02004350), url(${homeBanner})`,
      }}
    ></div>
  );
};

export default Banner;
