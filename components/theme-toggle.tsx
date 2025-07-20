'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="h-10 w-10 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/80 hover:border-accent focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 drop-shadow-sm" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 drop-shadow-sm" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}