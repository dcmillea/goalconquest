import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PublicHoverButtonProps {
  defaultText: string;
  hoverText: string;
}

export default function PublicHoverButton({
  defaultText,
  hoverText,
}: PublicHoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  // h-24 w-36
  return (
    <Button
      variant="default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="font-cinzel m-2 h-36 w-48 lg:h-40 lg:w-52 bg-black/60 font-semibold text-2xl lg:text-4xl whitespace-normal text-center transition-all duration-300 hover:bg-royal/80 hover:scale-105 hover:cursor-pointer"
    >
      <span
        className={`block transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        {defaultText}
      </span>
      <span
        className={`absolute transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {hoverText}
      </span>
    </Button>
  );
}
