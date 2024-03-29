import { cn } from "@/lib/utils";

interface ILoaderProps {
  className: string;
}

const Loader = ({ className }: ILoaderProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="w-7 h-7 animate-[spin_1.5s_linear_infinite] rounded-full border-8 border-dotted border-[#36d7b7]"></div>
    </div>
  );
};

export default Loader;
