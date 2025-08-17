import { useState, type RefObject } from "react";
import { ImageViewer } from "./imageviewermodal";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import reviews from "../data/reviews.json";

export const Portfolio = ({
  reference,
}: {
  reference: RefObject<HTMLDivElement | null>;
}) => {
  const galleryLengthPictures = 15;
  const imagePaths = Array.from(
    { length: galleryLengthPictures },
    (_, i) => `/gallery/gallery${i + 1}.jpg`
  );
  const [openImageViewer, setOpenImageViewer] = useState(false);
  const [selectedImagePath, setSelectedImagePath] = useState("");

  const handleOpenModal = (imagePath: string) => {
    setOpenImageViewer(true);
    setSelectedImagePath(imagePath);
  };

  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex" ref={reference}>
      <div className="w-full h-full ">
        <ImageViewer
          open={openImageViewer}
          setOpen={setOpenImageViewer}
          imagePath={selectedImagePath}
        />
        <div className="m-4 md:m-10">
          <p className="text-fuchsia-700">LOOK AT THE REVIEWS</p>
          <p className="text-3xl font-[600] w-1/2">The Gallery</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 py-4 w-full">
          {imagePaths.map((src, idx) => (
            <div
              key={idx}
              className="relative w-1/3 md:w-1/4 h-64 transition-all duration-300"
              onClick={() => handleOpenModal(src)}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="size-64 object-cover rounded-lg hover:scale-104 transition-all duration-300"
                // height={100}
                // width={275}
              />
            </div>
          ))}
        </div>
        <div className="py-8">
          <p className="text-3xl font-[600] mx-4 md:mx-10">
            What Our Customers Say
          </p>
          <div className="relative flex items-center justify-center p-4">
            {/* Prev Arrow */}
            <button
              onClick={prevReview}
              className="absolute left-0 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 z-10 md:px-4"
            >
              <ArrowLeftIcon className="size-6 stroke-2" />
            </button>

            {/* Review Container */}
            <div className="overflow-hidden w-full text-black">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="w-full flex-shrink-0 flex flex-col items-center justify-center rounded-lg shadow-md p-4 text-center"
                  >
                    <div className=" bg-white rounded-lg p-4 text-center">
                      <p className="md:text-lg">
                        <span className="font-bold">{review.name}</span> ⭐️{" "}
                        <span className="text-xs">
                          Recommends Perfection Auto Spa
                        </span>
                      </p>
                      <p className="px-4">{review.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextReview}
              className="absolute right-0 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 z-10 md:px-4"
            >
              <ArrowRightIcon className="size-6 stroke-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
