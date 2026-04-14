"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfter({ before, after, alt = "Before and after comparison" }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const hasBefore = before && !before.includes("undefined");
  const hasAfter = after && !after.includes("undefined");

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/4] md:aspect-[1.85/1] w-full overflow-hidden cursor-col-resize select-none bg-[#e0deda]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full) */}
      {hasAfter ? (
        <Image src={after} alt={`${alt} — after`} fill quality={95} draggable={false} className="object-cover md:object-contain md:object-top pointer-events-none" />
      ) : (
        <div className="absolute inset-0 bg-dark/5 border-2 border-dashed border-dark/15 flex items-center justify-center">
          <span className="text-[18px] font-medium text-dark/30">After — add image</span>
        </div>
      )}

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {hasBefore ? (
          <img src={before} alt={`${alt} — before`} draggable={false} onContextMenu={(e) => e.preventDefault()} className="absolute inset-0 w-full h-full object-cover md:object-contain md:object-top pointer-events-none" style={{ minWidth: `${containerRef.current?.offsetWidth || 1000}px` }} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-dark/10 border-2 border-dashed border-dark/15" style={{ minWidth: `${containerRef.current?.offsetWidth || 1000}px` }}>
            <span className="text-[18px] font-medium text-dark/30">Before</span>
          </div>
        )}
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-dark z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 z-10 pointer-events-none flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="w-[44px] h-[44px] bg-white border-2 border-dark flex items-center justify-center">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M6 1L1 8L6 15" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 1L19 8L14 15" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 bg-white border-2 border-dark px-3 py-1.5 text-[13px] font-medium text-dark pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 bg-white border-2 border-dark px-3 py-1.5 text-[13px] font-medium text-dark pointer-events-none">
        After
      </div>
    </div>
  );
}
