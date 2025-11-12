import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="pt-40 w-full h-full flex flex-col justify-start items-center md:pt-64">
      <h1 className="md:text-6xl text-5xl text-center font-bold font-inter filter drop-shadow-lg drop-shadow-neutral-950">
        Turn Work into War
      </h1>
      <p className="md:text-2xl text-lg text-center font-inter pt-4 pb-4 font-semibold filter drop-shadow-lg drop-shadow-neutral-950">
        Gamify your work by putting your goals on the battlefield.
      </p>
      <Button
        variant="default"
        className="border-none md:h-20 h-14 w-10/12 mt-6 bg-royal 
                hover:cursor-pointer
                hover:bg-purple-700 hover:shadow-md transition
                duration-300 ease-in-out
                md:text-4xl 
                text-2xl font-semibold max-w-md"
        size="lg"
      >
        ⚔️ Get Started ⚔️
      </Button>

      <div className="h-full w-full flex-col md:flex-row flex border-red-200 border-2 pt-12 pb-12 md:pt-24 md:pb-24">
        <div className="h-1/2 flex flex-row w-full justify-between items-center border-2 border-red-400">
          <Button
            variant="default"
            className="h-24 w-36 bg-black/60 font-semibold text-lg whitespace-normal text-center"
          >
            Build Your Army
          </Button>
          <Button
            variant="default"
            className="h-24 w-36 bg-black/60 font-semibold text-lg whitespace-normal text-center"
          >
            Defeat Your Enemies
          </Button>
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <Button
            variant="default"
            className="h-24 w-36 bg-black/60 font-semibold text-lg whitespace-normal text-center"
          >
            Gain Gold & XP
          </Button>
          <Button
            variant="default"
            className="h-24 w-36 bg-black/60 font-semibold text-lg whitespace-normal text-center"
          >
            Conquer The World
          </Button>
        </div>
      </div>
    </div>
  );
}
