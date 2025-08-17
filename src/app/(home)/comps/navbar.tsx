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

export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
             {/* TODO: LINK TO DOWNLOAD CV */}
              <NavbarButton 
                variant="primary"
                onClick={() => {
                  window.open("https://drive.google.com/file/d/1GiznSZd0TMcRUXzrJvbTNTN2tJq6YiRT/view?usp=sharing", "_blank");
                }}
                >Download CV</NavbarButton>
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
                onClick={() => {
                  handleScrollTo(item.link);
                  setIsMobileMenuOpen(false)}}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}//TODO: LINK TO DOWNLOAD CV
                variant="primary"
                className="w-full"
              >
                Download CV
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}

