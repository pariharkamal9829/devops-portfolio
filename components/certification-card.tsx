'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  index: number;
  image?: string;
  verifyLink?: string;
}

export function CertificationCard({ title, issuer, date, index, image, verifyLink }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {verifyLink ? (
        <Link 
          href={verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:border-primary/50">
            <CardContent className="p-6 relative">
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex items-start gap-4">
                {image ? (
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={image}
                      alt={`${title} certificate`}
                      fill
                      className="object-contain rounded-lg border bg-white p-1"
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
                <div className="space-y-1 min-w-0 flex-1">
                  <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{issuer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">{date}</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Verified
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {image ? (
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={image}
                    alt={`${title} certificate`}
                    fill
                    className="object-contain rounded-lg border bg-white p-1"
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
      )}
    </motion.div>
  );
}