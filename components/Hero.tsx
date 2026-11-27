import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const SLIDES = [
  {
    id: 'general',
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: <>Innovative Geological & <br className="hidden md:block"/> Geo-Engineering Solutions</>,
    subtitle: "Providing expert geological analysis and engineering services for sustainable development",
    primaryCta: { text: "Our Services", link: "/#services" },
    secondaryCta: { text: "Get in Touch", link: "/contact" }
  },
  {
    id: 'geo-engineering',
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1950&auto=format&fit=crop",
    title: <>Advanced Geotechnical <br className="hidden md:block"/> Engineering</>,
    subtitle: "Foundation design, slope stability, and risk mitigation for safe and resilient infrastructure.",
    primaryCta: { text: "Explore Engineering", link: "/services/geo-engineering-works" },
    secondaryCta: { text: "View Projects", link: "/portfolio" }
  },
  {
    id: 'geological',
    image: "https://images.unsplash.com/photo-1461301214746-1e790926d323?q=80&w=1950&auto=format&fit=crop",
    title: <>Precise Geological <br className="hidden md:block"/> Intelligence</>,
    subtitle: "Hydrogeology, lithological mapping, and geophysical surveys to de-risk your projects.",
    primaryCta: { text: "Geological Services", link: "/services/geological-services" },
    secondaryCta: { text: "Contact Experts", link: "/contact" }
  }
];

export default function Hero() {
  const [slideState, setSlideState] = useState<{ current: number; previous: number | null }>({
    current: 0,
    previous: null,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const currentSlide = slideState.current;
  const previousSlide = slideState.previous;

  useEffect(() => {
    setIsMounted(true);

    // Preload all hero slide images so transitions never stall waiting for network decode
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.src = slide.image;
    });
  }, []);

  const nextSlide = useCallback(() => {
    setSlideState((prev) => ({
      current: (prev.current + 1) % SLIDES.length,
      previous: prev.current,
    }));
  }, []);

  const prevSlide = useCallback(() => {
    setSlideState((prev) => ({
      current: (prev.current - 1 + SLIDES.length) % SLIDES.length,
      previous: prev.current,
    }));
  }, []);

  const goToSlide = (index: number) => {
    setSlideState((prev) => {
      if (index === prev.current) return prev;
      return {
        current: index,
        previous: prev.current,
      };
    });
  };

  // Auto-scroll logic
  useEffect(() => {
    if (isTouching) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, [currentSlide, isTouching, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    setIsTouching(true);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    setIsTouching(false);
    if (!touchStartRef.current || e.changedTouches.length === 0) {
      touchStartRef.current = null;
      return;
    }

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleTouchCancel = () => {
    touchStartRef.current = null;
    setIsTouching(false);
  };

  return (
    <section
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      className="min-h-screen relative overflow-hidden flex flex-col bg-dark touch-pan-y"
    >
      {/* Background Slides: keep previous slide opaque underneath while current slide crossfades in on top */}
      {SLIDES.map((slide, index) => {
        const isCurrent = index === currentSlide;
        const isPrevious = index === previousSlide;

        const layerClass = isCurrent
          ? 'opacity-100 z-[2]'
          : isPrevious
          ? 'opacity-100 z-[1]'
          : 'opacity-0 z-0';

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 ease-in-out ${
              isMounted ? 'transition-opacity duration-700' : ''
            } ${layerClass}`}
          >
            <img
              src={slide.image}
              alt={typeof slide.title === 'string' ? slide.title : 'Hero Background'}
              referrerPolicy="no-referrer"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      {/* Shared Constant Contrast Scrim (prevents brightness/contrast dips during crossfade) */}
      <div className="absolute inset-0 bg-black/60 z-[5] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-[5] pointer-events-none"></div>

      {/* Foreground Flow Container */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white flex-1 flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8">
        {/* Centered Slide Stage */}
        <div className="max-w-5xl w-full mx-auto my-auto py-4 sm:py-6 grid grid-cols-1 items-center">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              aria-hidden={index !== currentSlide}
              className={`col-start-1 row-start-1 flex flex-col items-center justify-center transform ease-in-out ${
                isMounted ? 'transition-all duration-700' : ''
              } ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-8 invisible pointer-events-none'
              }`}
            >
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight tracking-tight text-white [text-wrap:balance]">
                {slide.title}
              </h1>

              <p className="text-base sm:text-xl md:text-2xl mb-7 sm:mb-10 drop-shadow-lg font-medium opacity-100 max-w-3xl mx-auto leading-relaxed text-gray-50">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-5 w-full sm:w-auto">
                {/* Primary CTA: Brand Yellow with Black Text (Maintained Original Style) */}
                <Link
                  to={slide.primaryCta.link}
                  className="inline-flex items-center justify-center whitespace-nowrap shrink-0 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 bg-secondary text-dark border-2 border-secondary hover:bg-white hover:border-white hover:text-dark shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  {slide.primaryCta.text}
                </Link>

                {/* Secondary CTA: Glass Effect with Solid White Outline (Maintained Original Style) */}
                <Link
                  to={slide.secondaryCta.link}
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 bg-white/5 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-dark hover:border-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <span>{slide.secondaryCta.text}</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation & Scroll Cluster (In-flow so it never overlaps CTAs) */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:gap-5 shrink-0">
          {/* Navigation Controls */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className="py-2 px-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-10'
                      : 'bg-white/40 w-2 hover:bg-white'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce-slow text-white opacity-80">
            <Link
              to="/#services"
              aria-label="Scroll down"
              className="inline-flex items-center justify-center p-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <ChevronDown size={32} />
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-all hidden md:flex border border-white/10 hover:border-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-all hidden md:flex border border-white/10 hover:border-white/30"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
}
