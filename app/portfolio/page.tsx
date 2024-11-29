'use client';

import { ProjectCard } from '@/components/project-card';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure using Terraform and Ansible, implementing Infrastructure as Code best practices with modular design patterns.',
    tags: ['AWS', 'Terraform', 'Ansible', 'IaC'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Kubernetes Cluster Management',
    description: 'Built and managed multi-region Kubernetes clusters with automated scaling and deployment pipelines using ArgoCD and Helm.',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'GitOps'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Monitoring & Observability Platform',
    description: 'Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack with custom dashboards and alerts.',
    tags: ['Prometheus', 'Grafana', 'ELK', 'Monitoring'],
    github: '#',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Designed and implemented scalable CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline with automated testing.',
    tags: ['Jenkins', 'GitHub Actions', 'AWS', 'CI/CD'],
    github: '#',
  },
  {
    title: 'Container Security Platform',
    description: 'Developed a container security scanning and compliance platform using Trivy, OPA, and custom policies.',
    tags: ['Security', 'Docker', 'OPA', 'Compliance'],
    github: '#',
  },
  {
    title: 'Database Operations Automation',
    description: 'Automated database operations including backup, restore, and scaling using custom operators and tools.',
    tags: ['PostgreSQL', 'MongoDB', 'Automation', 'Operators'],
    github: '#',
  },
];

export default function Portfolio() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">Featured Projects</h1>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}