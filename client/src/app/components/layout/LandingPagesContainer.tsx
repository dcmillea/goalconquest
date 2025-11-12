import Hero from "../sections/Hero";

export default function LandingPagesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="border-2 border-yellow-300 relative flex flex-col items-center justify-center h-full maxWidthContainer">
      <section className="relative w-10/12 flex flex-col justify-start items-center h-full">
        <Hero />
      </section>
    </main>
  );
}
