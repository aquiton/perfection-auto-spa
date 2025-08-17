import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { type SetStateAction } from "react";

interface ImageModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  imagePath: string;
}

export const ImageViewer = ({ open, setOpen, imagePath }: ImageModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      onClick={handleClose}
      open={open}
      className="fixed z-50 inset-0 flex justify-center items-center bg-gray-900/75"
    >
      <div
        className="relative text-black bg-white/75 rounded-lg m-4 md:m-0 "
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="p-2 hover:pointer-cursor">
          <XMarkIcon className="size-5 stroke-2 text-black" />
        </button>
        <div className="flex justify-center h-full max-h-[600px] max-w-[600px] w-full p-4">
          <img src={`${imagePath}`} alt={"car"} className="object-contain" />
        </div>
      </div>
    </Dialog>
  );
};
