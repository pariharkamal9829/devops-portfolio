'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure using Terraform and Ansible, implementing Infrastructure as Code best practices with modular design patterns.',
    tags: ['AWS', 'Terraform', 'Ansible', 'IaC'],
    github: 'https://github.com/pariharkamal9829/AWS-Projects',
    demo: '#',
    image: '/images/cloud-automation.jpg',
    video: '/videos/cloud-automation.mp4',
  },
  {
    title: 'Kubernetes Cluster Management',
    description: 'Built and managed multi-region Kubernetes clusters with automated scaling and deployment pipelines using ArgoCD and Helm.',
    tags: ['Kubernetes', 'Helm', 'ArgoCD', 'GitOps'],
    github: 'https://github.com/pariharkamal9829/kubernetes-cluster-management',
    demo: '#',
    image: '/images/kubernetes.jpg',
    video: '/videos/kubernetes.mp4',
  },
  {
    title: 'Monitoring & Observability Platform',
    description: 'Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack with custom dashboards and alerts.',
    tags: ['Prometheus', 'Grafana', 'ELK', 'Monitoring'],
    github: 'https://github.com/pariharkamal9829/monitoring-platform',
    demo: '#',
    image: '/images/monitoring.jpg',
    video: '/videos/monitoring.mp4',
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-black text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-violet-400">
          Featured Projects
        </h1>
      </motion.div>
      
      <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {project.video ? (
              <motion.video 
                className="w-full h-48 sm:h-56 object-cover" 
                autoPlay 
                loop 
                muted
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <source src={project.video} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={300} 
                  className="w-full h-48 sm:h-56 object-cover" 
                />
              </motion.div>
            )}
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-violet-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <motion.span 
                    key={i} 
                    className="bg-violet-600 text-white px-2 py-1 rounded-md text-xs sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a 
                  href={project.github} 
                  className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-500 transition text-center text-sm sm:text-base"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                >
                  View Code
                </motion.a>
                {project.demo && (
                  <motion.a 
                    href={project.demo} 
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition text-center text-sm sm:text-base"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
