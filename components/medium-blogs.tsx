'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MediumPost {
  title: string;
  link: string;
  thumbnail?: string;
}

export default function MediumBlogs() {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/medium')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setPosts(data.items || []);
      })
      .catch(() => setPosts([]));

    return () => {
      mounted = false;
    };
  }, []);

  if (!posts.length) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Latest on Medium</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <motion.a
            key={p.link + i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="block group bg-card rounded-lg overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="relative w-full h-40 bg-muted">
              {p.thumbnail ? (
                <Image src={p.thumbnail} alt={p.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">No Image</div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{p.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
