"use client";

import React, { useState, useEffect } from "react";

interface ChartWrapperProps {
  children: (width: number) => React.ReactNode;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const element = document.getElementById("chart-container");
      if (element) {
        setWidth(element.getBoundingClientRect().width);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return <div id="chart-container" className="w-full h-64" />;

  return (
    <div id="chart-container" className="w-full">
      {children(width)}
    </div>
  );
};
