'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Repo {
  name: string;
  url: string;
  description?: string;
  language?: string;
  stars?: number;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/github')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setRepos(data.repos || []);
      })
      .catch(() => setRepos([]));

    return () => {
      mounted = false;
    };
  }, []);

  if (!repos.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Featured GitHub Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((r, i) => (
          <motion.div key={r.url} className="group bg-card rounded-lg overflow-hidden shadow-sm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <div className="relative w-full h-40 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
              {/* Placeholder architecture thumbnail: use language text and a simple SVG block */}
              <div className="text-center">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.language || 'Various'}</div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">{r.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{r.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <Link href={r.url} target="_blank" className="text-sm text-primary">View</Link>
                <div className="text-xs text-muted-foreground">⭐ {r.stars ?? 0}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
