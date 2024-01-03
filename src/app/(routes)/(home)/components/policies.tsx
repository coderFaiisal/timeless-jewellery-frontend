"use client";

import { CreditCard, LifeBuoy, Send, Share2 } from "lucide-react";

const Policies = () => {
  const policies = [
    {
      icon: <Send />,
      title: "Free Shipping",
      description: " Free Shipping On All US Order Or Order Above $200",
    },

    {
      icon: <LifeBuoy />,
      title: "Support 24/7",
      description: "Contact Us 24 Hours A Day, 7 Days A Week",
    },

    {
      icon: <Share2 />,
      title: "30 Days Return",
      description: " Simply Return It Within 30 Days For An Exchange",
    },
    {
      icon: <CreditCard />,
      title: "100% Payment Secure",
      description: "We Ensure Secure Payment With PEV",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-4/5 mx-auto py:4 md:py-10">
      {policies?.map((policy) => (
        <div key={policy?.title} className="flex p-4 ">
          <div className="text-[#1dab9c] text-5xl">{policy?.icon}</div>
          <div className="ml-4">
            <h1 className="text-base md:text-lg font-medium md:font-semibold opacity-70">
              {policy?.title}
            </h1>
            <p className="text-sm mt-2 md:font-medium opacity-70">
              {policy?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policies;
