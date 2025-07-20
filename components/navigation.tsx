'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Resume', href: '/resume' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/95 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/98 to-background/95 backdrop-blur-xl" />
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="font-bold text-base hidden xs:inline">DevOps Portfolio</span>
          <span className="font-bold text-base xs:hidden">Portfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative',
                pathname === item.href
                  ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side - Theme toggle and mobile menu */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button - Enhanced visibility */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative z-50 h-11 w-11 p-0 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/80 hover:border-accent focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex items-center justify-center">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground drop-shadow-sm" />
              ) : (
                <Menu className="h-6 w-6 text-foreground drop-shadow-sm" />
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Enhanced Backdrop with better contrast */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu with enhanced visibility */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background/98 backdrop-blur-xl border-l border-border/50 shadow-2xl lg:hidden">
            <div className="flex flex-col h-full bg-gradient-to-b from-background/95 to-background/98">
              {/* Menu Header with dark background */}
              <div className="flex items-center justify-between p-6 border-b border-border/50 bg-background/95 backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="h-9 w-9 bg-background/80 border border-border/30 hover:bg-accent/80 hover:border-accent focus:ring-2 focus:ring-primary"
                >
                  <X className="h-5 w-5 text-foreground" />
                </Button>
              </div>
              
              {/* Navigation Links with enhanced contrast */}
              <nav className="flex flex-col p-6 space-y-2 flex-1 bg-background/90 backdrop-blur-sm">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-200',
                      'hover:bg-accent/90 hover:text-accent-foreground hover:shadow-md hover:scale-[1.02]',
                      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
                      'border border-transparent hover:border-border/30',
                      'backdrop-blur-sm',
                      pathname === item.href
                        ? 'bg-primary/15 text-primary border-primary/30 shadow-lg shadow-primary/10'
                        : 'text-foreground bg-background/50 hover:text-foreground'
                    )}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : undefined
                    }}
                  >
                    <span className="drop-shadow-sm">{item.name}</span>
                    {pathname === item.href && (
                      <div className="ml-auto w-2 h-2 bg-primary rounded-full shadow-sm" />
                    )}
                  </Link>
                ))}
              </nav>
              
              {/* Menu Footer with dark background */}
              <div className="p-6 border-t border-border/50 bg-background/95 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground text-center font-medium">
                  DevOps Portfolio © 2025
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}