import { useRef, type RefObject } from "react";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Portfolio } from "./components/portfolio";
import { Services } from "./components/services";
import logo from "./assets/images/Logo.png";

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPage = (reference: RefObject<HTMLDivElement | null>) => {
    reference.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black h-screen overflow-y-auto text-white">
      <div
        ref={topRef}
        className="h-screen bg-contain xl:bg-cover bg-no-repeat w-full bg-[linear-gradient(to_bottom,_black,_transparent_50%,_black),url('./assets/images/BannerV6.png')] bg-[position:center] xl:bg-[position:center_10px] "
      >
        {/* Nav Bar and Title  */}
        <div className="relative flex items-center text-white px-8 py-4">
          <img
            src={logo}
            className="size-16 absolute cursor-pointer hidden md:block"
            onClick={scrollToTop}
            alt="Company logo"
          />
          <div className="flex justify-center w-full h-[40px]">
            <nav className="flex items-center w-fit gap-8 text-white bg-zinc-900 px-4 rounded-full">
              <p
                onClick={() => scrollToPage(aboutRef)}
                className="transition-all duration-300 hover:bg-[#0C0A09] hover:text-white rounded-full hover:px-3 hover:text-lg cursor-pointer"
              >
                About
              </p>
              <p
                onClick={() => scrollToPage(servicesRef)}
                className="transition-all duration-300 hover:bg-[#0C0A09] hover:text-white rounded-full hover:px-3 hover:text-lg cursor-pointer"
              >
                Services
              </p>
              <p
                onClick={() => scrollToPage(portfolioRef)}
                className="transition-all duration-300 hover:bg-[#0C0A09] hover:text-white rounded-full hover:px-3 hover:text-lg cursor-pointer"
              >
                Portfolio
              </p>
              <p
                onClick={() => scrollToPage(contactRef)}
                className="transition-all duration-300 hover:bg-[#0C0A09] hover:text-white rounded-full hover:px-3 hover:text-lg cursor-pointer"
              >
                Contact
              </p>
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 items-center">
          <h1 className="text-4xl md:text-7xl 2xl:text-8xl font-[500]">
            Perfection Auto Spa
          </h1>
          <p className="md:text-xl w-2/3 md:w-2/5 2xl:w-1/3 text-center font-[300]">
            Specializing in detailing services for cars, boats, and aircraft, as
            well as premium ceramic coatings.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <About reference={aboutRef} />

      {/* Section 3 */}
      <Services reference={servicesRef} />

      {/* Section 4 */}
      <Portfolio reference={portfolioRef} />

      {/* Section 5 */}
      <Contact reference={contactRef} />
    </div>
  );
}
