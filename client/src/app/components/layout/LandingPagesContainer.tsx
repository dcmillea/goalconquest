import About from "../sections/About";
import Hero from "../sections/Hero";

export default function LandingPagesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <section className="relative w-10/12 flex flex-col justify-start items-center min-h-screen">
        <Hero />
      </section>
      <section className="relative w-full flex flex-col justify-start items-center min-h-screen">
        <About />
      </section>
    </main>
  );
}
