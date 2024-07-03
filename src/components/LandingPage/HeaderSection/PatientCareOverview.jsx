const PatientCareOverview = () => {
  return (
    <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between gap-5">
      {/* stat */}
      <div className="bg-white h-[312px] flex-1 p-5 space-y-2 rounded-3xl mt-10 border relative">
        <h3 className="text-5xl font-semibold">90%</h3>
        <p className="text-sm">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <div className="absolute bottom-10 right-12">
          <img src="/Group 12.png" className="" alt="" />
        </div>
      </div>
      {/* text with mid 3 div */}
      <div>
        <h3 className="text-5xl py-5 font-semibold text-center">
          Comprehensive Care <br /> for Every Patient
        </h3>
        <div className="flex justify-between gap-5 boto">
          <div className="bg-[#fffff5] h-[216px] flex flex-col flex-1 p-5 space-y-2 rounded-3xl border relative">
            <div className="flex-1">
              <h3 className="text-5xl font-semibold">500+</h3>
              <p className="text-sm">Board-certified doctors</p>
            </div>
            <div className="absolute bottom-5 right-5  flex-1">
              <img src="/contract (1) 1.png" className="" alt="" />
            </div>
          </div>
          <div className="bg-transparent mt-7 flex flex-col flex-1 p-5 space-y-2 rounded-3xl border relative ">
            <div className="flex-1">
              <h3 className="text-5xl font-semibold">4.8</h3>
              <p className="text-sm">Over 20,000 Patient</p>
            </div>
            <div className="absolute bottom-0  flex-1">
              <img src="/contract (1) 1.png" className="" alt="" />
            </div>
          </div>
          <div className="bg-[#fffff5] h-[216px] flex flex-col flex-1 p-5 space-y-2 rounded-3xl border relative">
            <div className="flex-1">
              <h3 className="text-5xl font-semibold">500+</h3>
              <p className="text-sm">Money spend for poor patient</p>
            </div>
            <div className="absolute bottom-5 right-5 flex-1">
              <img src="/Group coin.png" className="" alt="" />
            </div>
          </div>

       
        </div>
      </div>
      {/* Video */}

      <div className="bg-white h-[312px] flex-1 p-5 space-y-2 rounded-3xl mt-10 border relative">
        <h3 className="text-5xl font-semibold">50+</h3>
        <p className="text-sm">
          Free lession video for <br /> patient
        </p>
        <div className="absolute bottom-10 right-12">
          <img src="/Group.png" className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PatientCareOverview;
