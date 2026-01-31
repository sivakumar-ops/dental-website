# Dental 128 - Professional Dental Clinic Website

A modern, responsive dental clinic website built with React, featuring smooth animations, SEO optimization, and a comprehensive service showcase. This is a clone of the Dental 128 Webflow template, rebuilt from scratch with modern web technologies.

![Dental 128 Homepage](https://via.placeholder.com/1200x600/00A3E0/FFFFFF?text=Dental+128)

## 🌟 Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Semantic HTML, meta tags, Open Graph, and proper heading hierarchy
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Performance**: Lazy loading, code splitting, and optimized assets
- **Modular Components**: Reusable components for easy maintenance
- **CSS Modules**: Scoped styling to prevent conflicts

## 📁 Project Structure

```
dental-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css          # Global styles and CSS variables
│   ├── components/
│   │   ├── common/                 # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── sections/               # Page sections
│   │       ├── Hero.jsx
│   │       ├── Hero.module.css
│   │       ├── Services.jsx
│   │       ├── Services.module.css
│   │       ├── Team.jsx
│   │       ├── Team.module.css
│   │       ├── BookAppointment.jsx
│   │       └── BookAppointment.module.css
│   ├── pages/                      # Page components
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── AboutUs.module.css
│   │   ├── Services.jsx
│   │   ├── Services.module.css
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   ├── App.jsx                     # Main app component with routing
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML template with SEO meta tags
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dental-128-clone.git
   cd dental-128-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/dental-128"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors

Edit CSS variables in `src/assets/styles/global.css`:

```css
:root {
  --color-primary: #00A3E0;
  --color-primary-dark: #0087C1;
  --color-secondary: #1A2B3C;
  /* ... */
}
```

### Fonts

The project uses Google Fonts. Change fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet" />
```

Then update in `global.css`:

```css
:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### Images

Replace image URLs in components with your own assets. Store images in `public/` folder or use a CDN.

## 📄 Component Overview

### Common Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Site footer with links and contact info

### Section Components

- **Hero**: Homepage hero with call-to-action and testimonial
- **Services**: Service cards with descriptions
- **Team**: Team member cards with social links
- **BookAppointment**: Appointment booking form

### Pages

- **Home**: Main landing page
- **About Us**: Company information and team
- **Services**: Complete service listing
- **Contact**: Contact form and information

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **CSS Modules** - Scoped styling
- **React Intersection Observer** - Scroll animations

## ♿ Accessibility

This website follows WCAG 2.1 Level AA guidelines:

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Sufficient color contrast
- Skip to main content link

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card tags
- Proper heading hierarchy (H1-H6)
- Alt attributes on all images
- Clean URL structure
- Fast loading times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact:
- Email: info@dental128.com
- Phone: (500) 555-5050

## 🙏 Acknowledgments

- Original design inspired by Dental 128 Webflow template
- Icons from Heroicons
- Images from Unsplash and Pexels

---

Made with ❤️ for modern dental practices
