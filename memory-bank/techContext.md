# Tech Context: Riviera Residence

## Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (CSS-based config)
- **Animations**: CSS transitions, Intersection Observer, Framer Motion (available)
- **Smooth Scroll**: Lenis
- **GSAP**: Available via gsap + @gsap/react
- **Utilities**: clsx for conditional classes

## Architecture
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - React client components
- `/src/hooks` - Custom React hooks (useInView, useCountUp)

## Fonts
- Playfair Display (Google Fonts via next/font)
- Inter (Google Fonts via next/font)

## Build
- `npm run build` - Production build
- `npm run dev` - Development server
