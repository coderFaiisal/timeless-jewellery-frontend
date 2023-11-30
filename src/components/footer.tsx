import { Separator } from "./ui/separator";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const footerItems = [
    {
      title: "Client Care",
      childrens: [
        {
          name: "Contact Us",
        },
        {
          name: "Product Care & Repair",
        },
        {
          name: "Frequently Asked Questions",
        },
        {
          name: "Shipping Returns",
        },
        {
          name: "Timeless Select Financing",
        },
        {
          name: "Gift Cards",
        },
      ],
    },
    {
      title: "Our Company",
      childrens: [
        {
          name: "World of Timeless",
        },
        {
          name: "Sustainability",
        },
        {
          name: "Timeless Careers",
        },
        {
          name: "Website Policies",
        },
      ],
    },
    {
      title: "Related Timeless Sites",
      childrens: [
        {
          name: "Wedding & Gift Registry",
        },
        {
          name: "Business Accounts",
        },
        {
          name: "The Timeless & Co. Foundation",
        },
        {
          name: "Timeless Alertline",
        },
      ],
    },
  ];

  return (
    <footer className="px-4">
      <div className="justify-center md:flex md:justify-around py-2 md:py-6 text-sm">
        {footerItems?.map((item) => (
          <div key={item?.title} className="my-4 md:my-8 pl-4 md:pl-0">
            <h1 className="text-base font-semibold mb-4">{item?.title}</h1>
            <ul className="space-y-1 md:space-y-3 pl-8 md:pl-0">
              {item?.childrens?.map((childItem) => (
                <li
                  key={childItem?.name}
                  className="text-sm cursor-pointer hover:underline"
                >
                  {childItem?.name}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="hidden md:flex justify-start items-center space-x-3">
          <Instagram />
          <Facebook />
          <Youtube />
          <Twitter />
        </div>
      </div>

      <div className="flex md:hidden justify-around items-center my-4">
        <Instagram />
        <Facebook />
        <Youtube />
        <Twitter />
      </div>

      <Separator />
      <div className="py-6 text-sm text-center text-gray-600">© T&CO. 2023</div>
    </footer>
  );
};

export default Footer;
