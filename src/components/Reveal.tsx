import { ReactNode, ElementType } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Direction = "up" | "down" | "left" | "right" | "fade" | "zoom";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: ElementType;
}

const initial: Record<Direction, string> = {
  up: "opacity-0 translate-y-10",
  down: "opacity-0 -translate-y-10",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  fade: "opacity-0",
  zoom: "opacity-0 scale-95",
};

const Reveal = ({ children, direction = "up", delay = 0, className = "", as: Tag = "div" }: RevealProps) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : initial[direction]
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
