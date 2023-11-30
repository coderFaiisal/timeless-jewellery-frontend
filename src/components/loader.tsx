import { cn } from "@/lib/utils";

interface ILoaderProps {
  children: React.ReactNode;
  className: string;
}

const Loader = ({ children, className }: ILoaderProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
    </div>
  );
};

export default Loader;
