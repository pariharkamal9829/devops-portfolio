'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Implementing GitOps with ArgoCD',
    date: '2024-03-20',
    readTime: '10 min read',
    excerpt: 'A comprehensive guide to implementing GitOps practices using ArgoCD in Kubernetes environments.',
    slug: 'implementing-gitops',
    tags: ['GitOps', 'Kubernetes', 'ArgoCD', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
  },
  {
    title: 'Kubernetes Best Practices',
    date: '2024-03-15',
    readTime: '8 min read',
    excerpt: 'Essential best practices for managing Kubernetes clusters in production.',
    slug: 'kubernetes-best-practices',
    tags: ['Kubernetes', 'DevOps', 'Security', 'Performance'],
    image: 'https://images.unsplash.com/photo-1667372393913-64daa9b6290d',
  },
  {
    title: 'Advanced AWS Infrastructure Automation',
    date: '2024-03-10',
    readTime: '12 min read',
    excerpt: 'Deep dive into AWS infrastructure automation using Terraform, CloudFormation, and AWS CDK.',
    slug: 'aws-infrastructure-automation',
    tags: ['AWS', 'IaC', 'Terraform', 'CloudFormation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  },
  {
    title: 'Monitoring Microservices with Prometheus',
    date: '2024-03-05',
    readTime: '15 min read',
    excerpt: 'Learn how to implement comprehensive monitoring for microservices using Prometheus.',
    slug: 'monitoring-microservices',
    tags: ['Monitoring', 'Prometheus', 'Grafana', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-center">Technical Blog</h1>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group rounded-lg h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2 sm:pb-4">
                  <CardTitle className="group-hover:text-primary transition-colors text-base sm:text-lg font-semibold line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col p-4 sm:p-6 pt-0">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all text-sm">
                    Read More
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
