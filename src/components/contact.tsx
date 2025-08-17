import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaFacebook } from "react-icons/fa";
import type { RefObject } from "react";
import logo from "../assets/images/Logo.png";

export const Contact = ({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className="h-screen bg-white text-black p-4 flex flex-col justify-between items-center"
      ref={reference}
    >
      <h1 className="font-[600] text-4xl md:py-4">
        Book your luxury car detailing today
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="bg-black rounded-lg text-white p-4 md:w-1/2">
          <div className="flex gap-3 items-center">
            <h1 className="font-[600] text-xl">
              ARE YOU CURIOUS ABOUT THE POSSIBILITIES FOR YOUR CAR?
            </h1>
            <img
              src={logo}
              alt={"Perfection Auto Spa logo"}
              width={75}
              height={75}
              className="bg-white"
            />
          </div>
          <div className="flex flex-col md:flex-row py-8 justify-center gap-4">
            <div className="flex items-center gap-1 ">
              <PhoneIcon className="size-6 stroke-2" />
              <p className="select-all md:text-xl">(616) 250-3037</p>
            </div>
            <div className="flex items-center gap-1">
              <EnvelopeIcon className="size-6 stroke-2" />
              <p className="select-all md:text-xl">
                pristinedetailingservice@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center flex flex-col gap-4 justify-center items-center">
          <h1 className="font-[700] text-2xl">OPENING HOURS</h1>
          <div className="flex flex-col gap-2 w-2/3 md:w-1/2 text-[14px] md:text-xl">
            <div className="flex justify-between items-center">
              <p>Monday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Tuesday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p>Wednesday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p>Thursday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p>Friday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p>Saturday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>{" "}
            <div className="flex justify-between items-center">
              <p>Sunday:</p>
              <p>8:00AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl font-[600]">Check Us Out On Facebook!</p>
        <a
          href="https://www.facebook.com/perfectionautospas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="size-8" />
        </a>
      </div>

      <p className="text-xs md:text-[16px] text-center">
        Copyright © 2025 Perfection Auto Spa - All Rights Reserved.
      </p>
    </div>
  );
};
