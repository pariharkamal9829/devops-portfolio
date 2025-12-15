'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UpworkReviews() {
  const [reviews, setReviews] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/api/upwork')
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setReviews(data.reviews || []);
      })
      .catch(() => setReviews([]));

    return () => {
      mounted = false;
    };
  }, []);

  if (!reviews.length) return null;

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Upwork Reviews</h2>
        <Link href="https://www.upwork.com/freelancers/~01763ff771cdbdfb3a" target="_blank" className="text-sm text-muted-foreground">View profile</Link>
      </div>

      <div className="relative">
        <motion.div className="flex gap-4 overflow-x-auto py-2 px-1" drag="x" dragConstraints={{ left: 0, right: 0 }}>
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] max-w-sm bg-card rounded-lg p-4 shadow-md"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-sm text-muted-foreground">{r}</p>
              <div className="mt-3 text-xs text-muted-foreground">Upwork Review</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
