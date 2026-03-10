# Components Documentation

This document provides an overview of the main components in the Renewable Energy Institute website.

## Main Sections

### HeroSection

- **Purpose**: Full-screen hero carousel with promotional content
- **Features**:
  - Two slides: course promotion and features showcase
  - Auto-advancing with manual navigation
  - Responsive design with different content for mobile/desktop
  - Dynamic pricing calculations
- **Files**: `src/components/HeroSection.tsx`

### ClientsSection

- **Purpose**: Displays client logos in a scrolling carousel with business metrics
- **Features**:
  - Infinite scroll with pause on interaction
  - Local asset management for logos
  - Business metrics display
  - Responsive grid layout
- **Files**: `src/components/ClientsSection.tsx`

### CoursesSection

- **Purpose**: Course catalog with filtering and search
- **Features**:
  - Grid layout with course cards
  - Pricing display with discounts
  - Instructor information
  - Enrollment CTAs
- **Files**: `src/components/CoursesSection.tsx`

### FeaturesSection

- **Purpose**: Showcase institute features and benefits
- **Features**:
  - Icon-based feature cards
  - Responsive grid layout
  - Hover animations
- **Files**: `src/components/FeaturesSection.tsx`

### TeamSection

- **Purpose**: Display instructor profiles and expertise
- **Features**:
  - Profile cards with photos
  - Social media links
  - Specialization areas
  - Contact information
- **Files**: `src/components/TeamSection.tsx`

### FeedbackSection

- **Purpose**: Student testimonials and reviews
- **Features**:
  - Carousel of testimonials
  - Star ratings
  - Student photos and info
  - Multi-language support
- **Files**: `src/components/FeedbackSection.tsx`

### Header

- **Purpose**: Navigation and site branding
- **Features**:
  - Responsive navigation menu
  - Contact information
  - Mobile hamburger menu
  - Smooth scrolling to sections
- **Files**: `src/components/Header.tsx`

### Footer

- **Purpose**: Contact information and site links
- **Features**:
  - Multi-column layout
  - Contact details
  - Social media links
  - Company information
- **Files**: `src/components/Footer.tsx`

## UI Components

The project uses a custom UI library based on shadcn/ui with the following components:

### Used Components

- `badge` - Status and category indicators
- `button` - Primary and secondary buttons
- `card` - Content containers with headers/footers
- `avatar` - User profile images
- `toast/toaster` - Notification system
- `tooltip` - Hover information

### Removed Components

The following unused UI components have been removed to reduce bundle size:

- accordion, alert, alert-dialog, aspect-ratio, breadcrumb
- calendar, carousel, chart, checkbox, collapsible, command
- context-menu, dropdown-menu, form, hover-card, input-otp
- menubar, navigation-menu, pagination, popover, progress
- radio-group, resizable, scroll-area, select, slider
- switch, table, tabs, textarea, toggle, toggle-group
- drawer, sidebar

## Asset Management

### Images

- Hero backgrounds: `src/assets/hero-*.jpg`
- Client logos: `src/assets/*.png` (imported as modules)
- Course images: `public/*.png` (referenced by path)
- Team photos: `public/*.jpeg` (referenced by path)

### Best Practices

- All client logos are imported as local assets for better performance
- Images use lazy loading where appropriate
- Fallback text is provided for failed image loads
- Responsive image sizing with object-fit

## Performance Optimizations

1. **Code Splitting**: Unused UI components removed
2. **Image Optimization**: Local assets, lazy loading, proper sizing
3. **Bundle Size**: Removed unused dependencies and code
4. **Type Safety**: Full TypeScript coverage with proper interfaces
5. **Accessibility**: Proper alt text, ARIA labels, keyboard navigation

## Development Notes

- All components are fully typed with TypeScript interfaces
- Responsive design follows mobile-first approach
- Tailwind CSS used for consistent styling
- Components are self-contained with minimal dependencies
- Error boundaries implemented for graceful failure handling
