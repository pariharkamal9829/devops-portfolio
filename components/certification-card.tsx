'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import Image from 'next/image';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  index: number;
  image?: string;
}

export function CertificationCard({ title, issuer, date, index, image }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {image ? (
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={image}
                  alt={`${title} certificate`}
                  fill
                  className="object-cover rounded-lg border"
                />
              </div>
            ) : (
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-primary flex-shrink-0"
              >
                <Award size={24} />
              </motion.div>
            )}
            <div className="space-y-1 min-w-0">
              <h3 className="font-semibold leading-tight">{title}</h3>
              <p className="text-sm text-muted-foreground">{issuer}</p>
              <Badge variant="secondary" className="mt-2">{date}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}