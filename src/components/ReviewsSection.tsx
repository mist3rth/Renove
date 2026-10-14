import React from 'react';
import { Star } from 'lucide-react';
import { reviewsData } from '../data/roofingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="w-full py-20 lg:py-28 bg-[#fbf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c85a32] uppercase mb-3 inline-block">
            TÉMOIGNAGES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181b] tracking-tight mb-5">
            De vrais toits. De vrais résultats.
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Notre démarche transparente assure un chantier serein de l'inspection jusqu'aux finitions.
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-[#c85a32]/50 p-6 sm:p-8 bg-white/50 backdrop-blur-xs flex flex-col justify-between hover:border-[#c85a32] transition-colors shadow-xs"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#c85a32] stroke-[1.8] fill-transparent"
                    />
                  ))}
                </div>

                {/* Review Text without quotes */}
                <p className="text-base sm:text-lg text-[#27272a] leading-relaxed mb-6 font-normal">
                  {review.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#e4dfd7]/60">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#e4dfd7]"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base font-medium text-[#18181b]">
                    {review.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#71717a]">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
