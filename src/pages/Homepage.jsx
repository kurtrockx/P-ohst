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
        <h1 className="text-center text-4xl font-bold">P'ohst! 🍩</h1>
        <p className="text-center underline decoration-2">
          Write stuff. Post stuff. Regret nothing… unless it's dumb. D'oh!
        </p>
      </div>
      <img
        src={`/homer-frame${glasses ? "-glasses" : ""}.png`}
        alt="homer-frame"
        className="animate-up-down active:scale-95 mx-auto w-72 cursor-pointer shadow-xl duration-100"
        onClick={handleGlasses}
      />
      <ButtonBlack size={72} />
    </div>
  );
}

export default Homepage;
