'use client';

import { Badge } from '@/components/ui/badge';
import { SkillCard } from '@/components/skill-card';
import { CertificationCard } from '@/components/certification-card';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    title: 'Cloud Platforms',
    level: 95,
    description: 'AWS (Solutions Architect), Azure, GCP',
  },
  {
    title: 'Container Orchestration',
    level: 90,
    description: 'Kubernetes, Docker, ECS, OpenShift',
  },
  {
    title: 'Infrastructure as Code',
    level: 88,
    description: 'Terraform, CloudFormation, Ansible',
  },
  {
    title: 'CI/CD',
    level: 85,
    description: 'Jenkins, GitHub Actions, GitLab CI',
  },
  {
    title: 'Monitoring',
    level: 82,
    description: 'Prometheus, Grafana, ELK Stack',
  },
  {
    title: 'Security',
    level: 80,
    description: 'HashiCorp Vault, AWS Security Hub',
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: '2024',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
  },
  {
    title: 'Microsoft Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    date: '2023',
  },
  {
    title: 'HashiCorp Certified Terraform Associate',
    issuer: 'HashiCorp',
    date: '2023',
  },
];

const experience = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Corp',
    period: '2022 - Present',
    achievements: [
      'Led migration of 200+ microservices to Kubernetes',
      'Reduced deployment time by 70% through CI/CD optimization',
      'Implemented GitOps practices using ArgoCD',
      'Designed multi-region AWS infrastructure serving 1M+ users',
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'ArgoCD', 'GitOps'],
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloud Solutions Inc',
    period: '2020 - 2022',
    achievements: [
      'Automated infrastructure provisioning using Terraform',
      'Built CI/CD pipelines for 50+ applications',
      'Implemented monitoring solutions using Prometheus',
    ],
    technologies: ['Azure', 'Jenkins', 'Terraform', 'Docker'],
  },
];

const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'Stanford University',
    year: '2020',
  },
  {
    degree: 'B.S. in Software Engineering',
    school: 'University of California, Berkeley',
    year: '2018',
  },
];

export default function Resume() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <section>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company} • {job.period}</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <Badge variant="secondary" className="mt-2">{edu.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Core Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} index={index} />
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}