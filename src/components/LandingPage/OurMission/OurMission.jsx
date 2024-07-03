import SectionName from "../../SectionName";

const OurMission = () => {
  return (
    <div className="flex flex-col ">
      {/* content div */}
      <div>
        <SectionName sectionName={"Who we are"} w={"w-40"} />
        <h3 className="text-3xl md:text-5xl py-5 font-semibold">
          We Help To Get <br /> Soultions
        </h3>
        <p>
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
      </div>
      {/* image div */}
      <div></div>
      {/* floating div */}
      <div className="p-8 space-y-4 flex flex-col items-start justify-center h-[216px] w-[395px] bg-[#343268] text-white rounded-[32px]">
        <h4 className="text-2xl font-medium">Our mission is simple</h4>
        <p className="">
          To provide high-quality healthcare services that are accessible,
          personalized, and patient-centered.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
