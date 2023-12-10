import Banner from "@/components/banner";
import FeaturedContents from "@/components/featuredContents";
import Policies from "@/components/policies";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="my-4 space-y-6">
        <Policies />
        <h3 className="font-bold text-3xl text-center">Featured Contents</h3>
        <FeaturedContents />
      </div>
    </div>
  );
};

export default HomePage;
