import type { RefObject } from "react";

import car_service_path from "../assets/images/car_service.jpg";
import boat_service_path from "../assets/images/boat_service.jpg";
import plane_service_path from "../assets/images/plane_service.jpg";
import ceramic_service_path from "../assets/images/ceramic_service.jpg";

export const Services = ({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="flex h-screen bg-white" ref={reference}>
      <div className="w-full m-10">
        <div className="flex items-center justify-between w-full flex p-4">
          <div className="">
            <p className="text-fuchsia-700">OUR SERVICES</p>
            <p className="text-3xl font-[600] w-2/3 text-black">
              A FULL RANGE OF PREMIUM DETAILING SERVICES
            </p>
          </div>
        </div>
        <div className="w-full flex h-full justify-center">
          <div className="m-4 grid grid-cols-2 gap-2 w-full h-full max-w-[500px] md:max-w-[600px] max-h-[500px]">
            {/* Background image */}
            <div
              className="absolute rounded-lg inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${car_service_path})`,
              }}
            />
            {/* Dark overlay */}
            <div className="absolute rounded-lg inset-0 bg-black opacity-50 group-hover:opacity-25 transition-all duration-500" />
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-xl group-hover:text-2xl font-[700] transition-all duration-500">
              Cars
            </div>
            <div className="relative w-full rounded-lg group shadow-md shadow-black">
              {/* Background image */}
              <div
                className="absolute rounded-lg inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${boat_service_path})`,
                }}
              />
              {/* Dark overlay */}
              <div className="absolute rounded-lg inset-0 bg-black opacity-50 group-hover:opacity-25 transition-all duration-500" />
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl group-hover:text-2xl font-[700] transition-all duration-500">
                Boats
              </div>
            </div>
            <div className="relative w-full rounded-lg group shadow-md shadow-black">
              {/* Background image */}
              <div
                className="absolute rounded-lg inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${plane_service_path})`,
                }}
              />
              {/* Dark overlay */}
              <div className="absolute rounded-lg inset-0 bg-black opacity-50 group-hover:opacity-25 transition-all duration-500" />
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl group-hover:text-2xl font-[700] transition-all duration-500">
                Air Craft
              </div>
            </div>
            <div className="relative w-full rounded-lg group shadow-md shadow-black">
              {/* Background image */}
              <div
                className="absolute rounded-lg inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${ceramic_service_path})`,
                }}
              />
              {/* Dark overlay */}
              <div className="absolute rounded-lg inset-0 bg-black opacity-50 group-hover:opacity-25 transition-all duration-500" />
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-white text-xl text-center group-hover:text-2xl font-[700] transition-all duration-500">
                Ceramic Coatings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
