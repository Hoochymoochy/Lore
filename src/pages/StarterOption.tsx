import MainLayout from "../layout/MainLayout";
import StarterTab from "../images/StarterTab2.png";
import TabButton from "../components/Tab";
import Card from "../components/Card";
import CardImage from "../images/Card.png";

const Starter = () => {
  return (
    <MainLayout>
      <div className="flex gap-4 h-[2000px] w-screen justify-center items-center">
        <div className="relative w-1/3 h-full justify-center items-center flex py-28">
          <img src={StarterTab} className="absolute w-[80%] h-[90%]" />
          <div className="relative z-10 space-y-5 text-white">
            <div className="text-9xl mb-20">
              Choose your <br /> focus
            </div>
            <div className="text-5xl whitespace-normal leading-normal">
              As you complete activities, <br /> your starter will grow and
              evolve, <br /> reflecting your real-world progress!"
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[75%] justify-center flex">
          <Card url={CardImage} disable={true} />
        </div>
        <div className="relative w-1/3 h-full justify-center items-center flex flex-col space-y-96">
          <TabButton text="Programming & Development" />
          <TabButton text="UI/UX Design" />
          <TabButton text="Game Development" />
          <TabButton text="Cybersecurity & Ethical Hacking" />
          <TabButton text="Programming & Development" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Starter;
