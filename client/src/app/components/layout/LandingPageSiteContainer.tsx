import LandingPagesContainer from "./LandingPagesContainer";
import LandingPageHeader from "./LandingPageHeader";
import Footer from "./Footer";

export default function LandingPageSiteContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/map_image.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 min-h-screen">
          <LandingPageHeader />
          <LandingPagesContainer>{children}</LandingPagesContainer>
          <Footer />
        </div>
      </div>
    </div>
  );
}
