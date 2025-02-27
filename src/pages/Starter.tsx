import MainLayout from "../layout/MainLayout";
import StarterTab from "../images/StarterTab.png";
import Card from "../components/Card";
import CardImage from "../images/Card.png";

const Starter = () => {
  return (
    <MainLayout>
      <div className="text-center text-white flex-col flex ">
        <span className="text-7xl">Choose Your Starter!</span>
        <span className="mt-10 text-xl">
          "Every journey begins with a choice. Select a starter that represents
          your <br /> path. As you complete activities, your starter will grow
          and evolve, reflecting <br /> your real-world progress!"
        </span>
      </div>

      <div className="relative w-[1200px] h-[800px]">
        <img
          src={StarterTab}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative flex space-x-4 z-10 justify-center py-[150px]">
          <Card url={CardImage} />
          <Card url={CardImage} />
          <Card url={CardImage} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Starter;
