import MainLayout from "../layout/MainLayout";
import StarterTab from "../images/StarterTab.png";
import Card from "../components/Card";
import CardImage from "../images/Card.png";

const Starter = () => {
  return (
    <MainLayout>
      <div className="text-center text-white flex-col flex mb-10">
        <span className="text-[100px]">Choose Your Starter!</span>
        <span className="mt-10 text-[30px]">asdfasdf</span>
      </div>

      <div className="relative w-[2000px] h-[1100px] justify-center items-center flex">
        <img
          src={StarterTab}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex space-x-56 z-10 justify-center">
          <Card url={CardImage} />
          <Card url={CardImage} />
          <Card url={CardImage} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Starter;
