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
    <div className="container mx-auto py-16 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-4xl font-bold text-center text-violet-400">
          Featured Projects
        </h1>
      </motion.div>
      
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            {project.video ? (
              <motion.video className="w-full h-56 object-cover" autoPlay loop muted
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <source src={project.video} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-56 object-cover" />
              </motion.div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-violet-400">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <motion.span 
                    key={i} 
                    className="bg-violet-600 text-white px-2 py-1 rounded-md text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <motion.a 
                  href={project.github} 
                  className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-500 transition"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  View Code
                </motion.a>
                {project.demo && (
                  <motion.a 
                    href={project.demo} 
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
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
