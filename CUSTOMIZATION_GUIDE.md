# Champion Driving School Website

A modern, responsive driving school website built with React 19, Tailwind CSS v4, and TypeScript.

## Features

✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **Professional Animations** - Smooth fade-in, slide, and floating animations
✅ **Multiple Sections** - Home, About, Pricing, Testimonials, Contact, Footer
✅ **Reusable Components** - Well-organized component structure
✅ **Form Handling** - Functional contact form with state management
✅ **Pricing Plans** - Showcasing different service packages

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5175/`

### Build

```bash
npm run build
```

## Customization Guide

### 1. Adding Your Logo

#### Option A: Replace the Icon in Navigation
1. Add your logo image to the `/public` folder (e.g., `/public/logo.png`)
2. Open `src/components/Navigation.tsx`
3. Replace the logo section with:

```tsx
<div className="flex items-center gap-2 animate-fade-in-down">
  <img src="/logo.png" alt="Champion DS" className="w-10 h-10 object-contain" />
  <span className="text-xl font-bold text-blue-600 hidden sm:inline">Champion Driving School</span>
  <span className="text-lg font-bold text-blue-600 sm:hidden">Champion DS</span>
</div>
```

#### Option B: Use SVG Logo
1. Save your SVG logo to `/public/logo.svg`
2. Use the same approach as above, but reference `/logo.svg`

### 2. Setting Up Favicon

#### Option A: Using PNG Favicon
1. Create a 32x32px PNG image of your logo
2. Save it as `favicon.png` in the `/public` folder
3. In `index.html`, uncomment the PNG favicon line:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

#### Option B: Using ICO Format
1. Convert your logo to `.ico` format (use online tools or ImageMagick)
2. Save it as `favicon.ico` in the `/public` folder
3. Add to `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

#### Option C: Generate Multiple Favicon Sizes
For best compatibility, include:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### 3. Updating Content

#### Change Business Information
- **Phone**: `src/components/Contact.tsx` (line with phone number)
- **Email**: `src/components/Contact.tsx` (line with email)
- **Address**: `src/components/Contact.tsx` and `src/components/Footer.tsx`

#### Update Pricing Plans
- Edit pricing plans in `src/components/Pricing.tsx`
- Modify features, prices, and plan names

#### Change Colors
- Blue (`blue-600`) is used throughout - replace with your brand color in:
  - Navigation buttons
  - Hero section
  - Pricing cards
  - Contact section

### 4. Update Meta Tags

In `index.html`, customize:
- Title: `<title>Your School Name</title>`
- Description: `<meta name="description" content="Your description" />`
- OG Tags for social media sharing

### 5. Professional Animations

Available animation classes in `src/styles/animations.css`:
- `.animate-fade-in-down` - Title animations
- `.animate-fade-in-up` - Content slide up
- `.animate-float` - Floating effect
- `.animate-spin-slow` - Slow rotation
- `.animate-slide-in-left` / `.animate-slide-in-right` - Horizontal slides
- `.animate-scale-in` - Scale entry
- `.animate-bounce-in` - Bouncy entry

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Run `npm run build`
3. Deploy the `dist` folder

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Top navigation with logo placeholder
│   ├── Home.tsx            # Hero section with animations
│   ├── About.tsx           # About section with features
│   ├── Pricing.tsx         # Pricing plans
│   ├── Testimonials.tsx    # Student reviews
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer with links
├── styles/
│   └── animations.css      # Custom animations
├── App.tsx                 # Main component
├── main.tsx                # App entry point
└── index.css               # Global styles
```

## Technologies Used

- **React 19** - Latest React version with SSR support
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Lucide React** - Beautiful SVG icons

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT

## Support

For questions or issues, please contact the development team.

---

**Next Steps:**
1. ✅ Replace placeholder logo
2. ✅ Add favicon
3. ✅ Update contact information
4. ✅ Customize pricing
5. ✅ Update about/testimonial content
6. ✅ Deploy to production
