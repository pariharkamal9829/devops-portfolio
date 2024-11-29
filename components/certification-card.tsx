'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  index: number;
}

export function CertificationCard({ title, issuer, date, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-primary"
            >
              <Award size={24} />
            </motion.div>
            <div className="space-y-1">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{issuer}</p>
              <Badge variant="secondary" className="mt-2">{date}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}