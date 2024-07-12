import Image from "next/image";
import mainHero from "../../../public/mainHero.jpg"

const IMAGE_URL = mainHero;

const MainHero = () => {
  return (
    <div className="relative w-[100%] h-[92vh] bg-[#C9C29F]">
      <div className="z-[-1]">
        <Image
          priority
          src={IMAGE_URL}
          fill
          className="object-center object-cover w-[100%] h-[100%]"
          alt="main hero image"
        />
      </div>

      <div className="p-20 relative flex flex-col items-center justify-center text-white">
        <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
          Manage your tasks and relax...
        </h1>
        <p className="text-black">making life simple</p>
      </div>
    </div>
  );
};

export default MainHero;
