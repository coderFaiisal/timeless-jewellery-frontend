import Loader from "@/components/loader";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <Loader className="min-h-screen w-full">
      <CircleLoader color="#36d7b7" />
    </Loader>
  );
};

export default Loading;
