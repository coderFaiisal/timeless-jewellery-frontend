"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let hightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={goToBtn}
          className=" fixed bottom-8  right-8 md:bottom-16 md:right-16 z-50 w-10 h-10  bg-[#81d8d0] rounded-full flex justify-center items-center cursor-pointer transition-opacity duration-300 hover:opacity-75"
        >
          <ArrowUp className="w-8 hover:w-6 hover:h-6 h-8 p-1 text-white ease-in duration-300" />
        </button>
      )}
    </>
  );
};

export default GoToTop;
