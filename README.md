# Personal Website with Aceternity Navbar

A modern personal website built with Next.js, TypeScript, and Tailwind CSS v4.0, featuring a beautiful responsive navbar component from Aceternity UI.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS v4.0** for modern styling
- **shadcn/ui** component architecture
- **Aceternity UI** resizable navbar with scroll effects
- **Framer Motion** for smooth animations
- **Mobile-responsive** design with hamburger menu
- **Dark mode** support

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page with navbar demo
├── components/
│   ├── ui/
│   │   └── resizable-navbar.tsx  # Main navbar component
│   └── resizable-navbar-demo.tsx # Demo implementation
└── lib/
    └── utils.ts            # Utility functions (cn, etc.)
```

## 🎨 Navbar Component Features

The resizable navbar includes:

- **Scroll-based animations** - Changes size and appearance on scroll
- **Backdrop blur effects** - Modern glass-morphism design
- **Responsive design** - Desktop and mobile optimized
- **Smooth transitions** - Powered by Framer Motion
- **Customizable styling** - Easy to modify with Tailwind CSS

### Usage Example

```tsx
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function MyNavbar() {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton variant="primary">Get Started</NavbarButton>
      </NavBody>
      {/* Mobile nav implementation... */}
    </Navbar>
  );
}
```

## 🔧 Customization

### Updating Navigation Items

Edit the `navItems` array in `src/components/resizable-navbar-demo.tsx`:

```tsx
const navItems = [
  { name: "Your Page", link: "#your-link" },
  // Add more items...
];
```

### Styling the Navbar

The navbar uses Tailwind CSS classes and can be customized by modifying the component files or extending the theme in `tailwind.config.js`.

### Logo Customization

Update the `NavbarLogo` component in `src/components/ui/resizable-navbar.tsx` to use your own logo and branding.

## 📦 Dependencies

- **Next.js 15** - React framework
- **React 19** - UI library  
- **TypeScript** - Type safety
- **Tailwind CSS v4.0** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - Component architecture
- **Tabler Icons** - Icon library

## 🚀 Deployment

This project can be deployed on:

- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform supporting Node.js

For Vercel deployment:

```bash
npm install -g vercel
vercel
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Next.js and Aceternity UI