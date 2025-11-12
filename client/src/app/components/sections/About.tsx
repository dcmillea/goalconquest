import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between w-10/12 h-full py-12 gap-12">
        {/* Left section (text) */}
        <div className="flex flex-col justify-center lg:w-2/5 text-center lg:text-left space-y-6">
          <h2 className="text-white font-bold text-4xl md:text-5xl">
            Why Goal Conquest?
          </h2>

          <p className="text-gray-300 text-md md:text-lg lg:text-xl">
            Task management platforms can be very helpful — I used to use them
            every day. But let’s be honest — they’re boring. With Goal Conquest,
            you get a clean dashboard for your tasks and a{" "}
            <Link href="/war-map" className="text-crimson hover:underline">
              War Map
            </Link>{" "}
            to view your progress with every goal.
          </p>
        </div>

        {/* Right section (image) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            className="rounded-md shadow-lg max-w-full h-auto object-contain"
            src="/images/map_image.png"
            alt="War Map Placeholder"
          />
        </div>
      </div>
    </div>
  );
}
