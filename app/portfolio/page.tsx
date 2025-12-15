'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown, ChevronUp, Award, Calendar, Users, Target } from 'lucide-react';
import Link from 'next/link';
// (Removed GitHub/Upwork sections per request)

const projects = [
  {
    id: 1,
    title: 'AWS Cloud Infrastructure Projects',
    shortDescription: 'Collection of AWS cloud infrastructure projects demonstrating various cloud services and architectures.',
    fullDescription: 'A comprehensive repository showcasing hands-on experience with AWS services including EC2, S3, VPC, IAM, Lambda, and more. Projects include serverless architectures, auto-scaling configurations, and cloud security implementations.',
    technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'VPC', 'IAM', 'CloudFormation', 'HTML'],
    category: 'Infrastructure',
    status: 'Active',
    timeline: '3 months',
    teamSize: 'Solo project',
    impact: ['Multiple AWS services deployed', 'Cloud architecture experience', 'Infrastructure automation', 'Cost optimization practices'],
    challenges: 'Learning AWS service integration, managing costs, implementing security best practices',
    solution: 'Used AWS free tier effectively, implemented IAM policies, followed well-architected framework',
    github: 'https://github.com/pariharkamal9829/AWS-Projects',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 2,
    title: 'Terraform & Jenkins Infrastructure Automation',
    shortDescription: 'Infrastructure as Code projects using Terraform with Jenkins CI/CD pipeline integration.',
    fullDescription: 'Demonstrates Infrastructure as Code practices using Terraform for provisioning cloud resources, integrated with Jenkins for automated deployment pipelines. Includes state management and modular Terraform configurations.',
    technologies: ['Terraform', 'Jenkins', 'AWS', 'HTML', 'CI/CD', 'Infrastructure as Code'],
    category: 'DevOps',
    status: 'Completed',
    timeline: '2 months',
    teamSize: 'Solo project',
    impact: ['Automated infrastructure provisioning', 'CI/CD pipeline implementation', 'Infrastructure as Code adoption', 'Deployment time reduction'],
    challenges: 'Terraform state management, Jenkins pipeline configuration, cloud resource dependencies',
    solution: 'Implemented remote state backend, modular Terraform design, staged deployment approach',
    github: 'https://github.com/pariharkamal9829/Terraform-Jenkins-Projects',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 3,
    title: 'Docker Containerization Projects',
    shortDescription: 'Containerization projects demonstrating Docker best practices and multi-container applications.',
    fullDescription: 'Collection of Docker projects showcasing containerization of various applications, multi-stage builds, docker-compose configurations, and container orchestration fundamentals.',
    technologies: ['Docker', 'Docker Compose', 'HTML', 'Containerization', 'Multi-stage builds'],
    category: 'Container Orchestration',
    status: 'Active',
    timeline: '2 months',
    teamSize: 'Solo project',
    impact: ['Application containerization', 'Docker best practices', 'Multi-container orchestration', 'Development environment standardization'],
    challenges: 'Container optimization, networking between containers, volume management',
    solution: 'Multi-stage builds for optimization, docker-compose for orchestration, proper volume configurations',
    github: 'https://github.com/pariharkamal9829/Docker-Projects',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 4,
    title: 'Kubernetes Deployment Project',
    shortDescription: 'Kubernetes cluster deployment and application orchestration with container management.',
    fullDescription: 'Hands-on Kubernetes project demonstrating cluster setup, pod deployment, service configuration, and application scaling. Includes YAML manifests and deployment strategies.',
    technologies: ['Kubernetes', 'YAML', 'Container Orchestration', 'Pod Management', 'Services'],
    category: 'Container Orchestration',
    status: 'Completed',
    timeline: '1 month',
    teamSize: 'Solo project',
    impact: ['Kubernetes cluster management', 'Container orchestration', 'Application scaling', 'Service discovery implementation'],
    challenges: 'Cluster networking, resource management, service exposure, persistent storage',
    solution: 'Used minikube for local development, implemented proper resource limits, configured ingress controllers',
    github: 'https://github.com/pariharkamal9829/Kubernate-project',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 5,
    title: 'DevSecOps Netflix Clone Pipeline',
    shortDescription: 'Complete DevSecOps pipeline for Netflix clone with security scanning, monitoring, and GitOps.',
    fullDescription: 'Full-scale DevSecOps project implementing a Netflix clone with comprehensive CI/CD pipeline, security scanning, monitoring with Prometheus and Grafana, and GitOps deployment on AWS.',
    technologies: ['TypeScript', 'AWS', 'Jenkins', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'SonarQube', 'OWASP ZAP'],
    category: 'Security',
    status: 'Learning Project',
    timeline: '2 months',
    teamSize: 'Fork from community project',
    impact: ['DevSecOps pipeline implementation', 'Security scanning integration', 'Monitoring and alerting', 'GitOps workflow'],
    challenges: 'Security tool integration, monitoring setup, AWS cost management, complex pipeline orchestration',
    solution: 'Followed community best practices, implemented security gates, used free-tier AWS services',
    github: 'https://github.com/pariharkamal9829/DevSecOps-Project',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 6,
    title: 'Node.js CI/CD Pipeline',
    shortDescription: 'Complete CI/CD pipeline for Node.js Todo application with automated testing and deployment.',
    fullDescription: 'Implemented end-to-end CI/CD pipeline for a Node.js Todo application including automated testing, code quality checks, containerization, and deployment automation.',
    technologies: ['Node.js', 'JavaScript', 'Jenkins', 'Docker', 'GitHub Actions', 'CI/CD'],
    category: 'DevOps',
    status: 'Completed',
    timeline: '3 weeks',
    teamSize: 'Fork and enhancement',
    impact: ['Automated deployment pipeline', 'Testing automation', 'Code quality improvement', 'Deployment time reduction'],
    challenges: 'Pipeline configuration, testing integration, deployment automation, environment management',
    solution: 'Used GitHub Actions for CI, implemented Docker for consistency, automated testing stages',
    github: 'https://github.com/pariharkamal9829/node-todo-cicd',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 7,
    title: 'Flask & Node.js Multi-Service Application',
    shortDescription: 'Multi-service application demonstrating microservices architecture with Flask and Node.js.',
    fullDescription: 'Developed a multi-service application showcasing microservices architecture principles, inter-service communication, and deployment strategies for polyglot applications.',
    technologies: ['Flask', 'Node.js', 'JavaScript', 'Python', 'Microservices', 'API Gateway'],
    category: 'DevOps',
    status: 'Completed',
    timeline: '1 month',
    teamSize: 'Solo project',
    impact: ['Microservices architecture', 'Inter-service communication', 'Polyglot development', 'Service deployment'],
    challenges: 'Service communication, data consistency, deployment complexity, monitoring multiple services',
    solution: 'Implemented API gateway, used message queues, containerized services, centralized logging',
    github: 'https://github.com/pariharkamal9829/Flask-Node-App',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  },
  {
    id: 8,
    title: 'Medusa DevOps Assignment',
    shortDescription: 'DevOps implementation and deployment strategies for Medusa e-commerce platform.',
    fullDescription: 'Professional DevOps assignment demonstrating deployment, scaling, and management of Medusa e-commerce platform with modern DevOps practices and cloud deployment.',
    technologies: ['TypeScript', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Deployment'],
    category: 'DevOps',
    status: 'Assignment Project',
    timeline: '1 week',
    teamSize: 'Solo project',
    impact: ['E-commerce platform deployment', 'Scaling implementation', 'DevOps best practices', 'Professional assignment completion'],
    challenges: 'Platform-specific requirements, deployment optimization, performance considerations',
    solution: 'Followed platform documentation, implemented container-first approach, automated deployment',
    github: 'https://github.com/pariharkamal9829/Medusa-Assigment-devops',
    demo: '#',
    featured: false,
    image: '/api/placeholder/800/400',
    architecture: '/api/placeholder/600/400',
  }
];

const categories = ['All', 'Infrastructure', 'Container Orchestration', 'DevOps', 'Monitoring', 'Security', 'Disaster Recovery'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">My Projects</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DevOps Portfolio
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real-world DevOps and cloud engineering projects showcasing hands-on experience 
              with modern infrastructure, automation tools, and deployment strategies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-primary/10 border border-primary/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">DevOps Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/10 border border-secondary/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-sm text-muted-foreground">Cloud Platforms</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-accent/10 border border-accent/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
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

      {/* GitHub/Upwork sections removed */}

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            My DevOps & Cloud Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProjectCard 
                  project={project} 
                  isExpanded={expandedProject === project.id}
                  onToggleExpand={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, isExpanded, onToggleExpand }: {
  project: any;
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
          {project.category === 'Infrastructure' && '🏗️'}
          {project.category === 'Container Orchestration' && '🐳'}
          {project.category === 'DevOps' && '⚙️'}
          {project.category === 'Monitoring' && '📊'}
          {project.category === 'Security' && '🔒'}
          {project.category === 'Disaster Recovery' && '🔄'}
        </motion.div>
        
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
            {project.status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
          <Badge variant="outline" className="text-xs">{project.category}</Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
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
                <h4 className="font-semibold text-sm mb-2">Project Details</h4>
                <p className="text-xs text-muted-foreground mb-3">{project.fullDescription}</p>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span className="text-muted-foreground">Timeline: {project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-primary" />
                    <span className="text-muted-foreground">Team: {project.teamSize}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Target className="w-3 h-3" />
                  Key Impact
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {project.impact.slice(0, 4).map((impact: string, i: number) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {impact}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech: string) => (
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
            <Link href={project.github} target="_blank">
              <Github className="w-3 h-3" />
            </Link>
          </Button>
          
          {project.demo !== '#' && project.demo && (
            <Button size="sm" variant="outline" asChild>
              <Link href={project.demo} target="_blank">
                <ExternalLink className="w-3 h-3" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
