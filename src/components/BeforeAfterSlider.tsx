import { useState, useRef, useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** Corner labels. Defaults to English; the LP passes localized strings. */
  labels?: { before: string; after: string };
}

/**
 * Drag-to-compare slider. Extracted from BeforeAfterPage.tsx unchanged except for two fixes:
 *  1. touchmove is registered with { passive: false } and calls preventDefault() while
 *     dragging, so a horizontal drag no longer scrolls the page on mobile.
 *  2. The handle icon is lucide's ChevronsLeftRight (outward-facing "< >"); the previous
 *     hand-drawn polylines rendered inward-facing chevrons.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  labels = { before: 'Before', after: 'After' },
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  const handleStart = (e: ReactMouseEvent | ReactTouchEvent) => {
    isDragging.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      // Fix 1: stop the page from scrolling vertically while the finger drags the handle.
      if ('touches' in e && e.cancelable) e.preventDefault();
      handleMove(e);
    };
    const end = () => handleEnd();
    window.addEventListener('mousemove', move as any);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchmove', move as any, { passive: false });
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);
    return () => {
      window.removeEventListener('mousemove', move as any);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchmove', move as any);
      window.removeEventListener('touchend', end);
      window.removeEventListener('touchcancel', end);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden cursor-ew-resize select-none bg-[#0A0A0A]"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      role="img"
      aria-label={`Before and after comparison. ${beforeAlt} on left, ${afterAlt} on right. Drag the slider to compare.`}
    >
      {/* AFTER image — bottom layer, fully visible */}
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* BEFORE image — top layer, clipped to left of slider */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* BEFORE label — top-left corner */}
      <span className="absolute top-3 left-3 bg-black/75 text-white text-[0.6875rem] uppercase tracking-[0.12em] font-semibold px-2.5 py-1 rounded pointer-events-none">
        {labels.before}
      </span>

      {/* AFTER label — top-right corner */}
      <span className="absolute top-3 right-3 bg-black/75 text-white text-[0.6875rem] uppercase tracking-[0.12em] font-semibold px-2.5 py-1 rounded pointer-events-none">
        {labels.after}
      </span>

      {/* Divider + drag handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
          {/* Fix 2: outward-facing chevrons */}
          <ChevronsLeftRight size={20} strokeWidth={2.5} className="text-[#0A0A0A]" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
