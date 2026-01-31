# Component Mapping Documentation

This document explains how each component in the React application maps to the original Dental 128 Webflow website.

## Page Structure Mapping

### Original Site Structure → React Implementation

```
Original Webflow Site          →    React Application
├── Navigation Bar              →    <Navbar />
├── Hero Section                →    <Hero />
├── Appointment Form            →    <BookAppointment />
├── Services Section            →    <Services />
├── Team Section                →    <Team />
├── Additional Services         →    Integrated in Services page
└── Footer                      →    <Footer />
```

---

## Component Breakdown

### 1. Navbar Component (`components/common/Navbar.jsx`)

**Original Site Features:**
- Fixed header with logo
- Desktop navigation menu
- Mobile hamburger menu
- Call-to-action button ("Let's Get in Touch")
- Phone number link
- Shopping cart (e-commerce feature - not implemented in clone)

**React Implementation:**
- Sticky navigation with scroll effect
- Responsive mobile menu with animations
- Active link highlighting
- Smooth transitions
- Accessibility features (ARIA labels, keyboard navigation)

**Mapping:**
```
Webflow Element               →    React Component
├── Logo SVG                  →    SVG in Link component
├── Nav Links                 →    Array mapped to <Link> components
├── CTA Button                →    Styled Link to /contact-us
├── Phone Link                →    <a href="tel:"> with icon
└── Mobile Menu               →    AnimatePresence + motion.div
```

---

### 2. Hero Section (`components/sections/Hero.jsx`)

**Original Site Features:**
- Large heading with badge
- Description text
- CTA button
- Image grid (3 images)
- Testimonial card overlay
- Background decoration

**React Implementation:**
- Framer Motion animations (fade-in, slide-up)
- Responsive grid layout
- Optimized image loading (lazy loading)
- Animated testimonial card
- Gradient background effects

**Mapping:**
```
Webflow Element               →    React Component
├── Award Badge               →    motion.div with icon + text
├── Main Heading              →    h1 with semantic HTML
├── Description               →    p tag with styling
├── CTA Button                →    Link with animations
├── Image Grid                →    CSS Grid with 3 images
│   ├── Image 1 (large)       →    Spans 2 rows
│   ├── Image 2               →    Top right
│   └── Image 3               →    Bottom right
├── Testimonial Card          →    Absolute positioned card
│   ├── Quote                 →    Italic text
│   ├── Author                →    Bold name
│   └── Rating                →    Stars + text
└── Background                →    Pseudo-element with gradient
```

---

### 3. Services Section (`components/sections/Services.jsx`)

**Original Site Features:**
- Section heading and description
- "View All Services" button
- Service cards with:
  - Number badge (01, 02, 03)
  - Title
  - Description
  - "Learn More" link
  - Featured image

**React Implementation:**
- Intersection Observer for scroll animations
- Staggered card animations
- Hover effects with image zoom
- Responsive grid layout

**Mapping:**
```
Webflow Element               →    React Component
├── Section Header            →    Flex container with title + button
├── Services Grid             →    CSS Grid (auto-fit, minmax)
└── Service Card              →    article.serviceCard
    ├── Number Badge          →    span.serviceNumber
    ├── Title                 →    h3 with Link
    ├── Description           →    p tag
    ├── Learn More Link       →    Link with arrow icon
    └── Image                 →    img with overlay effect
```

**Additional Services Grid:**
Implemented in Services page with icon-based cards showing:
- General Dentistry
- Implants
- Dental Surgery
- Teeth Braces
- Teeth Protection
- Alignment

---

### 4. Team Section (`components/sections/Team.jsx`)

**Original Site Features:**
- Section heading with description
- Action buttons ("About Us", "Open Positions")
- Team member cards with:
  - Professional photo
  - Name and role
  - Description
  - Social media links
  - Hover overlay effect

**React Implementation:**
- Grid layout with responsive columns
- Hover animations for social icons
- Staggered entrance animations
- Social links with smooth reveal

**Mapping:**
```
Webflow Element               →    React Component
├── Section Header            →    Flex container
│   ├── Title + Description   →    Text content
│   └── Action Buttons        →    Links styled as buttons
└── Team Grid                 →    CSS Grid (auto-fit)
    └── Team Card             →    article.teamCard
        ├── Image Wrapper     →    Aspect ratio container
        │   ├── Photo         →    img with zoom effect
        │   └── Social Overlay→    Absolute positioned div
        │       └── Icons     →    SVG links (LinkedIn, Twitter, etc.)
        └── Member Info       →    Text container
            ├── Name          →    h3
            ├── Role          →    p (styled)
            └── Description   →    p
```

---

### 5. Book Appointment (`components/sections/BookAppointment.jsx`)

**Original Site Features:**
- Gradient background card
- Form heading and description
- Multi-column form layout
- Input fields:
  - Name
  - Email
  - Phone
  - Dentist selection
  - Message (textarea)
- Submit button with success state

**React Implementation:**
- Controlled form components with React state
- Form validation
- Success message animation
- Decorative background elements
- Responsive grid layout

**Mapping:**
```
Webflow Element               →    React Component
├── Background Card           →    div.appointmentCard with gradient
├── Decorative Element        →    Pseudo-element (::before)
├── Form Header               →    Text content centered
└── Form                      →    form element with state
    ├── Form Row (2 cols)     →    CSS Grid
    │   ├── Name Input        →    input with label
    │   └── Email Input       →    input with label
    ├── Form Row (2 cols)     →    CSS Grid
    │   ├── Phone Input       →    input with label
    │   └── Dentist Select    →    select with options
    ├── Message Textarea      →    textarea
    └── Submit Button         →    button with conditional content
```

---

### 6. Footer Component (`components/common/Footer.jsx`)

**Original Site Features:**
- Dark gradient background
- Multi-column layout:
  - Brand section with logo and tagline
  - Quick links
  - Services links
  - Contact information
- Social media icons
- Bottom bar with copyright and legal links

**React Implementation:**
- Responsive grid that collapses on mobile
- Hover effects on links
- Social icons with animations
- Dynamic year for copyright

**Mapping:**
```
Webflow Element               →    React Component
├── Footer Container          →    footer with gradient background
├── Main Grid                 →    CSS Grid (4 columns → responsive)
│   ├── Brand Column          →    Logo, tagline, social links
│   ├── Quick Links           →    Mapped array of links
│   ├── Services              →    Mapped array of services
│   └── Contact Info          →    Contact details with icons
└── Bottom Bar                →    Flex container
    ├── Copyright             →    Dynamic year
    └── Legal Links           →    Privacy, Terms
```

---

## Page Components

### Home Page (`pages/Home.jsx`)

**Component Assembly:**
```jsx
<Home>
  <Hero />
  <BookAppointment />
  <Services />
  <Team />
</Home>
```

### About Us Page (`pages/AboutUs.jsx`)

**New Components:**
- Hero section with page title
- Mission/Values cards
- Team section (reused)
- Statistics grid

### Services Page (`pages/Services.jsx`)

**New Components:**
- Hero section with page title
- Comprehensive services grid (9 services)
- CTA section for booking

### Contact Page (`pages/Contact.jsx`)

**New Components:**
- Hero section
- Contact information sidebar
- Contact form
- Map integration (placeholder)

---

## Styling Approach

### CSS Architecture

```
Global Styles (global.css)
├── CSS Variables (colors, fonts, spacing)
├── Reset and base styles
├── Typography scales
├── Utility classes
└── Accessibility styles

Component Styles (*.module.css)
├── Component-specific styles
├── BEM-like naming conventions
├── Responsive media queries
└── Animation definitions
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
Default: Mobile (< 768px)
Tablet: 768px - 1024px
Desktop: > 1024px
```

---

## Animation Strategy

### Framer Motion Usage

1. **Page Entry Animations**
   - Fade in + slide up
   - Duration: 0.6-0.8s
   - Delay: Staggered by 0.1-0.2s

2. **Scroll Animations**
   - Intersection Observer triggers
   - Threshold: 0.1 (10% visible)
   - Once: true (animate once)

3. **Hover Effects**
   - Transform: translateY(-8px)
   - Box shadow increase
   - Duration: 0.3s

4. **Button Interactions**
   - Icon slide on hover
   - Background color transition
   - Scale on press

---

## Accessibility Features

### WCAG 2.1 Compliance

1. **Semantic HTML**
   - header, nav, main, section, article, footer
   - Proper heading hierarchy (h1 → h6)

2. **ARIA Labels**
   - aria-label on icon-only buttons
   - aria-labelledby for sections
   - aria-expanded for mobile menu

3. **Keyboard Navigation**
   - Tab order follows visual order
   - Focus indicators on all interactive elements
   - Skip to main content link

4. **Color Contrast**
   - Text: 4.5:1 minimum
   - Large text: 3:1 minimum
   - Interactive elements: Clear focus states

5. **Images**
   - Alt text for meaningful images
   - aria-hidden for decorative images

---

## SEO Implementation

### Meta Tags (index.html)

```html
<!-- Primary Meta Tags -->
<title>Dental 128 - Award-Winning Comprehensive Dentistry</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="..." />
```

### Structured Data

Consider adding JSON-LD schema:
- LocalBusiness
- MedicalBusiness
- Organization
- ContactPoint

---

## Performance Optimizations

### Implemented Optimizations

1. **Code Splitting**
   - React Router lazy loading
   - Component-level code splitting via Vite

2. **Image Optimization**
   - Lazy loading (loading="lazy")
   - WebP format where possible
   - Responsive images (srcset)

3. **Asset Optimization**
   - CSS Modules (scoped, no conflicts)
   - Tree-shaking unused code
   - Minification in production

4. **Caching Strategy**
   - Static assets cached
   - Service worker (optional)
   - CDN for images

---

## Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Mobile menu opens/closes
- [ ] All animations play smoothly
- [ ] Images load correctly

### Responsiveness
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)
- [ ] Landscape orientation

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader compatible
- [ ] Color contrast passes
- [ ] Focus indicators visible

### Performance
- [ ] Lighthouse score > 90
- [ ] Load time < 3s
- [ ] No console errors

---

This mapping ensures that all features from the original Dental 128 Webflow template are properly recreated in the React application with improved performance, maintainability, and modern web standards.
