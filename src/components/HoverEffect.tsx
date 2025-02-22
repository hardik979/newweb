import React, { ReactNode, MouseEvent } from "react";
import { useAnimate } from "framer-motion";

// Define the clip-path values
const CIRCLE_CLIP = "circle(0% at 50% 50%)";
const FULL_CIRCLE_CLIP = "circle(150% at 50% 50%)";
const TOP_CLIP = "circle(0% at 50% 0%)";
const BOTTOM_CLIP = "circle(0% at 50% 100%)";
const LEFT_CLIP = "circle(0% at 0% 50%)";
const RIGHT_CLIP = "circle(0% at 100% 50%)";

// Define the entrance and exit keyframes based on the side
const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [LEFT_CLIP, FULL_CIRCLE_CLIP],
  bottom: [BOTTOM_CLIP, FULL_CIRCLE_CLIP],
  top: [TOP_CLIP, FULL_CIRCLE_CLIP],
  right: [RIGHT_CLIP, FULL_CIRCLE_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [FULL_CIRCLE_CLIP, LEFT_CLIP],
  bottom: [FULL_CIRCLE_CLIP, BOTTOM_CLIP],
  top: [FULL_CIRCLE_CLIP, TOP_CLIP],
  right: [FULL_CIRCLE_CLIP, RIGHT_CLIP],
};

// Define the component's prop types
interface ClipPathEffectProps {
  children: ReactNode;
  className?: string;
  hoverColor?: string;
  textColor?: string;
}

const ClipPathEffect: React.FC<ClipPathEffectProps> = ({
  children,
  className = "",
  hoverColor = "bg-orange-500",
  textColor = "text-white",
}) => {
  const [scope, animate] = useAnimate();

  // Get the nearest side to the mouse cursor
  const getNearestSide = (e: MouseEvent) => {
    const box = e.currentTarget.getBoundingClientRect();

    const proximityToLeft = Math.abs(box.left - e.clientX);
    const proximityToRight = Math.abs(box.right - e.clientX);
    const proximityToTop = Math.abs(box.top - e.clientY);
    const proximityToBottom = Math.abs(box.bottom - e.clientY);

    const sortedProximity = [
      { proximity: proximityToLeft, side: "left" },
      { proximity: proximityToRight, side: "right" },
      { proximity: proximityToTop, side: "top" },
      { proximity: proximityToBottom, side: "bottom" },
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  // Handle the mouse enter event
  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    });
  };

  // Handle the mouse leave event
  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
      transition: {
        delay: 0,
        duration: 0.5,
      },
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} relative overflow-hidden  rounded-2xl cursor-pointer`}
    >
      {/* Children are rendered normally */}
      <div className="relative z-10">{children}</div>

      {/* ClipPath effect overlay */}
      <div
        ref={scope}
        style={{
          clipPath: CIRCLE_CLIP,
        }}
        className={`absolute inset-0 ${hoverColor} z-0 flex items-center justify-center rounded-2xl ${textColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ClipPathEffect;
