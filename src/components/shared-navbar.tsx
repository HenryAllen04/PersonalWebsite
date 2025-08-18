/**
 * Purpose: Shared navbar component used across all pages with consistent navigation
 * Features: Resizable scroll effect, responsive design, "My Story" navigation link
 */
"use client";
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
import { useState } from "react";

export function SharedNavbar() {
  const navItems = [
    {
      name: "Projects", 
      link: "#projects",
    },
    {
      name: "My Story",
      link: "#story",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="sticky inset-x-0 top-0 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/henry-allen-52868926b/" target="_blank" rel="noopener noreferrer">
            <NavbarButton variant="secondary">LinkedIn</NavbarButton>
          </a>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <NavbarButton variant="primary">Get in touch</NavbarButton>
          </button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <a href="https://www.linkedin.com/in/henry-allen-52868926b/" target="_blank" rel="noopener noreferrer" className="w-full">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                LinkedIn
              </NavbarButton>
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full"
            >
              <NavbarButton
                variant="primary"
                className="w-full"
              >
                Get in touch
              </NavbarButton>
            </button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
