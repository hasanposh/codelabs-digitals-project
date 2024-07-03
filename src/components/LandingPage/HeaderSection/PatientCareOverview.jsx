const PatientCareOverview = () => {
  return (
    <div className="max-w-[1160px] mx-auto px-5 md:p-0 flex flex-col md:flex-row justify-between gap-5">
      {/* stat */}
      <div className="order-2 lg:order-1 bg-white md:h-[312px] h-72 md:flex-1 p-5 space-y-2 rounded-3xl md:mt-10 border relative">
        <h3 className="text-4xl font-semibold">90%</h3>
        <p className="text-sm">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <div className="absolute bottom-10 right-12">
          <img src="/Group 12.png" className="" alt="" />
        </div>
      </div>
      {/* text with mid 3 div */}
      <div className="order-1 lg:order-2">
        <h3 className="text-3xl md:text-5xl py-5 font-semibold text-center">
          Comprehensive Care <br /> for Every Patient
        </h3>
        <div className=" flex flex-col md:flex-row justify-between gap-5 ">
          <div className="bg-[#fffff5] md:h-[216px] flex flex-col h-44 md:flex-1 p-5 space-y-2 rounded-3xl border relative">
            <div className="flex-1">
              <h3 className="text-4xl font-semibold">500+</h3>
              <p className="text-sm">Board-certified doctors</p>
            </div>
            <div className="absolute bottom-5 right-5 flex-1">
              <img src="/contract (1) 1.png" className="" alt="" />
            </div>
          </div>
          <div className="bg-transparent md:mt-7 flex flex-col min-h-44 md:flex-1 p-5 space-y-2 rounded-3xl border relative ">
            <div className="flex-1">
              <h3 className="text-4xl font-semibold">4.8</h3>
              <p className="text-sm">Over 20,000 Patient</p>
            </div>
            <div className="absolute bottom-10 flex-1">
              <div className="flex -space-x-2">
                <img
                  alt=""
                  className="size-9 border rounded-full dark:bg-gray-500 object-cover dark:border-gray-100"
                  src="https://images.pexels.com/photos/15545223/pexels-photo-15545223/free-photo-of-portrait-of-a-young-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <img
                  alt=""
                  className="size-9 border object-cover rounded-full dark:bg-gray-500 dark:border-gray-100"
                  src="https://images.pexels.com/photos/12995508/pexels-photo-12995508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <img
                  alt=""
                  className="size-9 border object-cover rounded-full dark:bg-gray-500 dark:border-gray-100"
                  src="https://images.pexels.com/photos/13171318/pexels-photo-13171318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <img
                  alt=""
                  className="size-9 border object-cover rounded-full dark:bg-gray-500 dark:border-gray-100"
                  src="https://images.pexels.com/photos/15214390/pexels-photo-15214390/free-photo-of-skier-wearing-a-helmet-and-protective-goggles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#fffff5] md:h-[216px] flex flex-col h-44 md:flex-1 p-5 space-y-2 rounded-3xl border relative">
            <div className="flex-1">
              <h3 className="text-4xl font-semibold">$5000</h3>
              <p className="text-sm">Money spend for poor patient</p>
            </div>
            <div className="absolute bottom-5 right-5 flex-1">
              <img src="/Group coin.png" className="" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Video */}

      <div className="order-3 lg:order-3 bg-white md:h-[312px] h-72 md:flex-1 p-5 space-y-2 rounded-3xl md:mt-10 border relative">
        <h3 className="text-4xl font-semibold">50+</h3>
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
