import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  title = 'Comparaison Toiture'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={`${title} : Curseur de comparaison avant et après`}
      className={`relative w-full aspect-16/10 rounded-2xl overflow-hidden select-none shadow-md border border-neutral-200/80 bg-neutral-900 cursor-ew-resize group ${
        isDragging ? 'shadow-xl ring-1 ring-[#c85a32]/40' : ''
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* "After" Image (Base layer - full width, no zoom) */}
      <img
        src={afterImage}
        alt={`Résultat après : ${title}`}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        width="900"
        height="560"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* "Before" Image (Clipped layer with clip-path for 100% exact alignment, no zoom) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`État avant : ${title}`}
          loading="lazy"
          decoding="async"
          width="900"
          height="560"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Pill Labels */}
      <div className="absolute top-3.5 left-3.5 pointer-events-none z-10">
        <span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide text-white bg-black/60 backdrop-blur-md rounded-md shadow-xs">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-3.5 right-3.5 pointer-events-none z-10">
        <span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide text-white bg-black/60 backdrop-blur-md rounded-md shadow-xs">
          {afterLabel}
        </span>
      </div>

      {/* Vertical Divider Line with Drag Button Handle */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* White line */}
        <div className="w-0.5 h-full bg-white shadow-md" />

        {/* Circular Drag Handle with < > arrows */}
        <div className="absolute w-9 h-9 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-700 text-xs font-bold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
          <div className="flex items-center gap-0.5 select-none text-[#c85a32]">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Accessible native range input overlay for keyboard/screen-readers */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label={`Glisser pour révéler l'avant et l'après de ${title}`}
      />
    </div>
  );
};
