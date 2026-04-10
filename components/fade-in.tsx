"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 700,
  direction = "up",
  distance = 30,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === "undefined") {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          // Small delay to ensure CSS transition works
          requestAnimationFrame(() => {
            setHasAnimated(true);
          });
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setHasAnimated(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const getTransform = () => {
    if (!hasAnimated && shouldAnimate) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        default:
          return "none";
      }
    }
    return "none";
  };

  // If animation hasn't been triggered yet, show content but prepare for animation
  const opacity = !shouldAnimate ? 1 : (hasAnimated ? 1 : 0);
  const transform = !shouldAnimate ? "none" : getTransform();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform,
        transition: shouldAnimate 
          ? `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  direction = "up",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <FadeIn
              key={index}
              delay={isVisible ? index * staggerDelay : 0}
              direction={direction}
            >
              {child}
            </FadeIn>
          ))
        : children}
    </div>
  );
}
