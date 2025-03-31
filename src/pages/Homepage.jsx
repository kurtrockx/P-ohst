import { useState } from "react";
import ButtonBlack from "../components/ButtonBlack";

function Homepage() {
  const [glasses, setGlasses] = useState(false);

  function handleGlasses() {
    setGlasses((g) => !g);
  }

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold xl:text-4xl">
          P'ohst! 🍩
        </h1>
        <p className="text-center text-xs underline decoration-2 xl:text-xl">
          Write stuff. Post stuff. Regret nothing… unless it's dumb. D'oh!
        </p>
      </div>
      <img
        src={`/homer-frame${glasses ? "-glasses" : ""}.png`}
        alt="homer-frame"
        className="animate-up-down mx-auto w-52 cursor-pointer shadow-xl duration-100 active:scale-95 xl:w-72"
        onClick={handleGlasses}
      />
      <ButtonBlack size={72} classList="w-52" />
    </div>
  );
}

export default Homepage;
