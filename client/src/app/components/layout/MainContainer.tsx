import { Button } from "@/components/ui/button";

export default function MainContainer() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen maxWidthContainer">
      {/* Overlay only for the background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/map_image.png')" }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content above overlay */}
      <section className="relative w-10/12 flex flex-col justify-start items-center h-full">
        <div className="pt-24 w-full h-full flex flex-col justify-start items-center">
          <h1 className="text-3xl text-center font-bold font-inter">
            Turn Work into War
          </h1>
          <p className="text-center font-inter pt-4 pb-4">
            Goal Conquest gamifies your work by putting your goals on a
            battlefield. You are the general. Complete your tasks, and win this
            war.
          </p>
          <Button variant="default" className="bg-midnight/70 border-none">
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}
