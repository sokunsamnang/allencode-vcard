# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. It's a React-based single-page application using static generation, featuring 3D animations with Three.js and React Three Fiber.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Core Structure
- **App Router**: Uses Next.js 14 App Router architecture (`/app` directory)
- **Components**: Modular React components in `/components` directory
  - Main components: About, Banner, Experience, Footer, Navbar, Projects
  - 3D components in `/components/main/` (StarsBackground.tsx)
- **Constants**: Static data and configuration in `/constant/index.tsx`
- **Public Assets**: Images and SVG icons in `/public/`

### Key Technologies
- **Next.js 14**: React framework with App Router
- **TypeScript**: Strict typing enabled
- **Tailwind CSS**: Utility-first CSS framework with custom container padding
- **Three.js**: 3D graphics via @react-three/fiber and @react-three/drei
- **Vercel Analytics**: Built-in analytics and speed insights

### Configuration
- **Path Aliases**: `@/*` maps to root directory
- **Tailwind**: Custom container padding and gradient utilities
- **TypeScript**: Strict mode with Next.js plugin

### Data Management
- Static data stored in `/constant/index.tsx`
- Social media links and project information centralized
- Metadata and SEO configured in `app/layout.tsx`

### Styling Approach
- Dark theme with `bg-[#111]` background
- Custom gradients and animations
- Responsive design with container-based layouts
- 3D star background animation

### SEO & Analytics
- Structured data (JSON-LD) for person schema
- Google Analytics integration via environment variable
- OpenGraph and canonical URL configuration
- Comprehensive metadata and keyword optimization