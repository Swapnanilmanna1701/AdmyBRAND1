"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface TestimonialItem {
  name: string;
  title: string;
  company: string;
  image: string;
  content: string;
}

interface InfiniteMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      window
        .getComputedStyle(scrollerRef.current)
        .getPropertyValue("--animation-duration");
      setStart(true);
    }
  }

  const getDirection = () => {
    if (direction === "left") {
      return "forwards";
    } else {
      return "reverse";
    }
  };

  const getSpeed = () => {
    if (speed === "fast") {
      return "20s";
    } else if (speed === "normal") {
      return "40s";
    } else {
      return "80s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--scroll-direction": getDirection(),
            "--scroll-speed": getSpeed(),
          } as React.CSSProperties
        }
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-xl flex-shrink-0 px-8 py-6 md:w-[450px] testimonial-card-glass animated-blue-border"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 flex flex-row items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-lg leading-none font-bold text-white">
                    {item.name}
                  </span>
                  <span className="text-sm leading-none text-gray-400">
                    {item.title} at {item.company}
                  </span>
                </div>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-600"
                />
              </div>
              <span className="relative z-20 text-base leading-relaxed text-gray-200">
                "{item.content}"
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
