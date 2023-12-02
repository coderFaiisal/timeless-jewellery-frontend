"use client";

import featureImg1 from "../assets/feature-img1.jpg";
import featureImg2 from "../assets/feature-img2.jpg";
import featureImg3 from "../assets/feature-img3.jpg";
import featureImg4 from "../assets/feature-img4.jpg";
import CustomImage from "./customImage";

const FeaturedContents = () => {
  const contents = [
    {
      image: featureImg1,
      title: "BEAUTIFUL",
      description: "Wedding Rings",
      link: "/",
    },
    {
      image: featureImg4,
      title: "EARRING",
      description: "Floral Earring",
      link: "/",
    },
    {
      image: featureImg2,
      title: "NEW ARRIVALS",
      description: "Pearl Necklaces",
      link: "/",
    },

    {
      image: featureImg3,
      title: "NEW DESIGN",
      description: "Diamond Jewelry",
      link: "/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5 mx-auto">
      {contents.map((content) => (
        <div key={content?.title} className="relative hover:opacity-70 cursor-pointer">
          <div className="">
            <CustomImage src={content?.image} alt="feature image" />
          </div>
          <div className="absolute right-4 md:right-2 lg:right-5 top-10 z-50">
            <h2 className="text-xs lg:text-md font-semibold opacity-30">
              {content?.title}
            </h2>
            <h1 className="text-sm lg:text-xl py-2 font-semibold ">
              {content?.description}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedContents;
