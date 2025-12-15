'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  ExternalLink, 
  BookOpen, 
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Target,
  Award,
  Eye
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'A two-tier web application using Docker and Nginx!',
    shortDescription: 'DevOps Reverse Proxy Project with Nginx + Docker Compose + Go + Flask Microservices',
    fullDescription: 'Complete implementation of a two-tier web application using Docker containers with Nginx as a reverse proxy. The project demonstrates microservices architecture with Go and Flask backends, Docker health checks, and proper container networking.',
    excerpt: 'Learn how to build a scalable two-tier web application using Docker and Nginx reverse proxy. This hands-on tutorial covers microservices architecture with Go and Flask backends.',
    date: '2025-07-01',
    readTime: '2 min read',
    tags: ['Docker', 'Nginx', 'Microservices', 'DevOps', 'Go', 'Flask', 'Docker Compose'],
    category: 'DevOps',
    difficulty: 'Intermediate',
    views: '1.2k',
    url: 'https://medium.com/@pariharkamlesh576/a-two-tier-web-application-using-docker-and-nginx-006e76d1a169',
    keyLearnings: [
      'Docker containerization best practices',
      'Nginx reverse proxy configuration',
      'Microservices communication patterns',
      'Docker Compose orchestration'
    ],
    technologies: ['Docker', 'Nginx', 'Go', 'Flask', 'Docker Compose'],
    projectType: 'Hands-on Tutorial',
    image: '/api/placeholder/800/400',
  },
  {
    id: 2,
    title: 'AWS EC2 vs. Ubuntu in VirtualBox for DevOps: A Deep Dive',
    shortDescription: 'Comprehensive comparison analysis between AWS EC2 and Ubuntu VirtualBox for DevOps workflows',
    fullDescription: 'In-depth analysis comparing AWS EC2 cloud instances with Ubuntu VirtualBox for DevOps environments. Covers performance, cost, scalability, security, and real-world use cases to help you choose the right platform.',
    excerpt: 'Choosing between AWS EC2 and Ubuntu VirtualBox for DevOps? This comprehensive guide breaks down the pros, cons, and real-world scenarios for each platform.',
    date: '2025-03-20',
    readTime: '3 min read',
    tags: ['AWS', 'EC2', 'VirtualBox', 'DevOps', 'Cloud', 'Virtualization', 'Comparison'],
    category: 'Cloud Infrastructure',
    difficulty: 'Beginner',
    views: '2.8k',
    url: 'https://medium.com/@pariharkamlesh576/aws-ec2-vs-ubuntu-in-virtualbox-for-devops-a-deep-dive-9429b581f60e',
    keyLearnings: [
      'AWS EC2 vs VirtualBox trade-offs',
      'Cost analysis and optimization',
      'Performance and scalability factors',
      'Real-world DevOps scenarios'
    ],
    technologies: ['AWS EC2', 'Ubuntu', 'VirtualBox', 'Cloud Computing'],
    projectType: 'Comparative Analysis',
    image: '/api/placeholder/800/400',
  }
];

const categories = ['All', 'DevOps', 'Cloud Infrastructure', 'Containerization', 'Automation'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Medium feed removed per request - keeping saved blog layout */}
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Technical Blog</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DevOps Insights
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sharing practical DevOps knowledge, hands-on tutorials, and real-world experiences 
              in cloud infrastructure, automation, and modern deployment strategies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-primary">{blogPosts.length}</div>
                <div className="text-sm text-muted-foreground">Articles Published</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/10 border border-secondary/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-secondary">4k+</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-accent/10 border border-accent/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-accent">Medium</div>
                <div className="text-sm text-muted-foreground">Platform</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            My Technical Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <BlogCard 
                  post={post} 
                  isExpanded={expandedPost === post.id}
                  onToggleExpand={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post, isExpanded, onToggleExpand }: {
  post: any;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  return (
    <Card className="h-full overflow-hidden bg-gradient-to-br from-card to-card/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center text-4xl opacity-30"
        >
          {post.category === 'DevOps' && '⚙️'}
          {post.category === 'Cloud Infrastructure' && '☁️'}
          {post.category === 'Containerization' && '🐳'}
          {post.category === 'Automation' && '🤖'}
        </motion.div>
        
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
            {post.difficulty}
          </Badge>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold leading-tight line-clamp-2">{post.title}</h3>
          <Badge variant="outline" className="text-xs ml-2">{post.category}</Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.shortDescription}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>{post.projectType}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t pt-4 mt-4 space-y-4"
            >
              <div>
                <h4 className="font-semibold text-sm mb-2">Article Details</h4>
                <p className="text-xs text-muted-foreground mb-3">{post.fullDescription}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Target className="w-3 h-3" />
                  Key Learnings
                </h4>
                <div className="space-y-1">
                  {post.keyLearnings.slice(0, 4).map((learning: string, i: number) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {learning}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">Technologies Covered</h4>
                <div className="flex flex-wrap gap-1">
                  {post.technologies.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex gap-2 mt-4">
          <Button
            size="sm"
            onClick={onToggleExpand}
            className="flex-1 text-xs"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
            {isExpanded ? <ChevronUp className="ml-1 w-3 h-3" /> : <ChevronDown className="ml-1 w-3 h-3" />}
          </Button>
          
          <Button size="sm" variant="outline" asChild>
            <Link href={post.url} target="_blank">
              Read on Medium
              <ExternalLink className="ml-1 w-3 h-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
