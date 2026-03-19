# System Patterns: Riviera Residence

## Component Pattern
- All components are "use client" (client components)
- Each section is a self-contained component
- useInView hook triggers animations on scroll
- useCountUp hook for animated number counting
- SmoothScroll wraps the entire page with Lenis

## Color System
- `#0A0A0A` - Primary background
- `#141414` - Card/secondary background
- `#F5F0E8` - Cream text (primary)
- `#A0978A` - Secondary/muted text
- `#C9A96E` - Gold accent
- `#1F1F1F` - Border color

## Animation Pattern
- Intersection Observer triggers animations once (no repeat)
- CSS transitions with `duration-[1400ms]` to `duration-[2000ms]`
- Staggered delays using inline `transitionDelay` styles
- Cubic-bezier easing for smooth reveals

## Responsive Approach
- Mobile-first with Tailwind breakpoints (sm, md, lg)
- Grid layouts adapt: 1 col -> 2 col -> 4 col
