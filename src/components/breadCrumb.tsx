import Link from "next/link";
import { Home } from "lucide-react";

const Breadcrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <Home className="h-5 w-5" />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>
            <span className="mx-2">/</span>
            {item.label}
          </Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return (
    <div className="flex items-center">
      {breadCrumbItems.map((item, idx) => (
        <li key={idx} className="flex items-center">
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default Breadcrumb;
