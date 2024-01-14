"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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
          className="fixed bottom-8 right-8 md:bottom-16 md:right-16 z-50 w-10 h-10 bg-black text-white hover:bg-[#36d7b7] ease-linear duration-200 rounded-full flex justify-center items-center cursor-pointer"
        >
          <ArrowUp className="w-7 h-7 p-1 " />
        </button>
      )}
    </>
  );
};

export default GoToTop;
