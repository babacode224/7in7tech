import { useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Solutions', href: '/solutions' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-40">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src="/logo.png" 
            alt="7to7 Tech Hub Logo" 
            className="w-40 h-40 object-contain rounded-md"
            onError={(e) => {
              // Fallback to text if the user hasn't placed the logo yet
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logo-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <span className="font-bold text-xl hidden sm:inline-block">7to7 Tech Hub</span>
          <div id="logo-fallback" className="hidden items-center gap-2 font-bold text-xl text-accent">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-black">7</span>
            </div>
            <span>7to7 Tech Hub</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="cta-primary text-sm">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/98">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="cta-primary text-sm w-full">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
}
