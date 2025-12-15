'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const UPWORK_PROFILE = 'https://www.upwork.com/freelancers/~01763ff771cdbdfb3a';

export default function UpworkProjects() {
  const projects = [
    {
      id: 1,
      title: 'Infrastructure Automation for E-commerce',
      summary: 'Terraform and CI/CD to provision scalable infra for an e-commerce startup.',
      link: UPWORK_PROFILE,
    },
    {
      id: 2,
      title: 'Dockerized Microservices Deployment',
      summary: 'Containerized microservices with CI/CD and monitoring.',
      link: UPWORK_PROFILE,
    },
    {
      id: 3,
      title: 'Kubernetes Migration',
      summary: 'Migrated monolith to Kubernetes with Helm charts and autoscaling.',
      link: UPWORK_PROFILE,
    },
    {
      id: 4,
      title: 'Security & Compliance Hardening',
      summary: 'Implemented DevSecOps practices and security scanning.',
      link: UPWORK_PROFILE,
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Upwork Projects</h2>
        <Link href={UPWORK_PROFILE} target="_blank" className="text-sm text-muted-foreground">View Upwork</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="block group bg-card rounded-lg overflow-hidden shadow-sm p-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">UP</div>
              <div className="flex-1">
                <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-3">{p.summary}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
