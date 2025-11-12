import LandingPagesContainer from "./LandingPagesContainer";
import LandingPageHeader from "./LandingPageHeader";

export default function LandingPageSiteContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-[120vh] sm:min-h-screen">
      <div
        className="relative min-h-[120vh] sm:min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/map_image.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 border-2 border-red-700 h-full">
          <LandingPageHeader />
          <LandingPagesContainer>{children}</LandingPagesContainer>
        </div>
      </div>
    </div>
  );
}
