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
    excerpt: 'A comprehensive guide to implementing GitOps practices using ArgoCD in Kubernetes environments. Learn about declarative configurations, automated deployments, and best practices.',
    slug: 'implementing-gitops',
    tags: ['GitOps', 'Kubernetes', 'ArgoCD', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
  },
  {
    title: 'Kubernetes Best Practices',
    date: '2024-03-15',
    readTime: '8 min read',
    excerpt: 'Essential best practices for managing Kubernetes clusters in production. Covering security, scalability, monitoring, and resource optimization.',
    slug: 'kubernetes-best-practices',
    tags: ['Kubernetes', 'DevOps', 'Security', 'Performance'],
    image: 'https://images.unsplash.com/photo-1667372393913-64daa9b6290d',
  },
  {
    title: 'Advanced AWS Infrastructure Automation',
    date: '2024-03-10',
    readTime: '12 min read',
    excerpt: 'Deep dive into AWS infrastructure automation using Terraform, CloudFormation, and AWS CDK. Compare different approaches and their use cases.',
    slug: 'aws-infrastructure-automation',
    tags: ['AWS', 'IaC', 'Terraform', 'CloudFormation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  },
  {
    title: 'Monitoring Microservices with Prometheus',
    date: '2024-03-05',
    readTime: '15 min read',
    excerpt: 'Learn how to implement comprehensive monitoring for microservices using Prometheus, Grafana, and custom exporters.',
    slug: 'monitoring-microservices',
    tags: ['Monitoring', 'Prometheus', 'Grafana', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
];

export default function Blog() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">Technical Blog</h1>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
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