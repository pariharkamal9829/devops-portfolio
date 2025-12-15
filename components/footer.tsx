'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork, SiMedium } from 'react-icons/si';

export default function Footer() {
  const socials = [
    { href: 'https://github.com/pariharkamal9829', icon: <FaGithub /> },
    { href: 'https://www.linkedin.com/in/kamlesh-parihar/', icon: <FaLinkedin /> },
    { href: 'https://medium.com/@pariharkamlesh576', icon: <SiMedium /> },
    { href: 'https://www.upwork.com/freelancers/~01763ff771cdbdfb3a', icon: <SiUpwork /> },
  ];

  return (
    <footer className="w-full border-t mt-12 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">© 2025 DevOps Portfolio. All rights reserved.</div>

        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <Link key={i} href={s.href} target="_blank" className="group text-muted-foreground hover:text-primary transition-colors">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent group-hover:scale-110 transition-transform">
                <span className="text-xl leading-none">{s.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
