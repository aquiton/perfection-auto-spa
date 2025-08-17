import type { RefObject } from "react";

import aboutimg from "../assets/images/about_image.jpg";

export const About = ({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="h-screen flex items-center" ref={reference}>
      <div className="p-4 md:m-10 h-full">
        <div className="flex flex-col md:flex-row md:py-4 gap-4 md:gap-8 h-full items-center">
          <div className="flex flex-col items-center w-full md:justify-center md:h-full md:w-1/2">
            <img
              src={aboutimg}
              className="h-fit w-full rounded-lg"
              alt="Picture of Canyon"
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2  rounded-lg p-4 h-fit">
            <div className="">
              <p className="text-fuchsia-700">ABOUT ME</p>
              <p className="md:text-3xl font-[600] w-1/2">Meet the Owner 👋</p>
              <p className="md:text-lg py-2">
                Hi, I’m <b>Canyon Upston</b>, founder of Perfection Auto Spa.
                For the past 5 years, I’ve been dedicated to delivering
                high-quality auto detailing with a focus on care, convenience,
                and customer satisfaction. What began as a passion has grown
                into a trusted business — backed by over 75 five-star reviews
                ⭐️ and countless returning customers.
              </p>
            </div>
            <div className="flex justify-evenly w-full gap-4">
              <div className="w-1/2">
                <h1 className="font-[700] text-sm md:text-lg">
                  🏠 Mobile Convenience
                </h1>
                <p>
                  Our service is 100% mobile, meaning we come directly to your
                  home or office. You get top-tier results without ever leaving
                  your driveway — saving you time, energy, and hassle.
                </p>
              </div>
              <div className="w-1/2">
                <h1 className="font-[700] md:text-lg"> 🚗 What We Do</h1>
                We offer a full range of professional detailing services,
                including:
                <div className="flex flex-wrap md:gap-2 text-sm">
                  <p>✅ Interior Detailing</p>
                  <p>✅ Exterior Detailing</p>
                  <p>✅ Paint Corrections</p>
                  <p>✅ Ceramic Coatings</p>
                  <p>✅ and MORE!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
