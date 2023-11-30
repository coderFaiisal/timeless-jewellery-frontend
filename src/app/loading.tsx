import Loader from "@/components/loader";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <Loader className="min-h-[450px] w-full">
      <PuffLoader color="#36d7b7" />
    </Loader>
  );
};

export default Loading;
