import { Button } from "@/components/ui/button";
import PublicHoverButton from "../ui/PublicHoverButton";

export default function Hero() {
  return (
    <div className="pt-52 pb-4 w-full min-h-screen flex flex-col justify-start items-center md:pt-64">
      <h1 className="text-6xl text-center font-bold font-inter filter drop-shadow-lg drop-shadow-neutral-950">
        Turn Work into War
      </h1>
      <p className="text-2xl text-center font-inter pt-8 pb-8 font-semibold filter drop-shadow-lg drop-shadow-neutral-950">
        Gamify your work by putting your goals on the battlefield.
      </p>
      <Button
        variant="default"
        className="border-none h-20 w-10/12 mt-6 mb-12 md:mt-8 md:mb-8 bg-royal 
                hover:cursor-pointer
                hover:bg-purple-700 hover:shadow-md transition
                duration-300 ease-in-out
                text-4xl 
                font-semibold max-w-md"
        size="lg"
      >
        ⚔️ Get Started ⚔️
      </Button>

      <div className="h-full w-full flex-col lg:flex-row flex justify-center items-center">
        <div className="mt-6 mb-6 md:mt-12 flex flex-row w-full justify-center md:justify-around items-center">
          <PublicHoverButton
            defaultText="Build An Army"
            hoverText="Define Your Strengths"
          />
          <PublicHoverButton
            defaultText="Defeat Your Enemies"
            hoverText="Complete Daily Habits"
          />
        </div>
        <div className="lg:mt-6 lg:mb-6 lg:md:mt-12 flex flex-row w-full items-center justify-center md:justify-around">
          <PublicHoverButton
            defaultText="Gain XP & Gold"
            hoverText="Earn Rewards"
          />
          <PublicHoverButton
            defaultText="Conquer The World"
            hoverText="Achieve Your Goals"
          />
        </div>
      </div>
    </div>
  );
}
