'use client';

import { Badge } from '@/components/ui/badge';
import { SkillCard } from '@/components/skill-card';
import { CertificationCard } from '@/components/certification-card';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    title: 'Cloud Platforms',
    level: 90,
    description: 'AWS (EC2, S3, Lambda, VPC), Azure, Google Cloud Platform',
  },
  {
    title: 'Container Technologies',
    level: 85,
    description: 'Docker, Kubernetes, Container Orchestration',
  },
  {
    title: 'Infrastructure as Code',
    level: 88,
    description: 'Terraform, CloudFormation, Ansible',
  },
  {
    title: 'CI/CD Tools',
    level: 85,
    description: 'Jenkins, GitHub Actions, GitLab CI/CD',
  },
  {
    title: 'Monitoring & Logging',
    level: 80,
    description: 'Prometheus, Grafana, ELK Stack, CloudWatch',
  },
  {
    title: 'Operating Systems',
    level: 90,
    description: 'Linux (Ubuntu, CentOS, RHEL), Windows Server',
  },
  {
    title: 'Scripting & Programming',
    level: 85,
    description: 'Python, Bash, PowerShell, YAML, JSON',
  },
  {
    title: 'Version Control',
    level: 90,
    description: 'Git, GitHub, GitLab, Bitbucket',
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    image: '/image/aws-certified-solutions-architect-associate (2).png',
    verifyLink: 'https://www.credly.com/badges/9550cc3f-ae9e-4192-b2d1-cfd6c4122022/linked_in_profile',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/image/aws-certified-cloud-practitioner.png',
    verifyLink: 'https://www.credly.com/badges/b46283d1-ffef-4873-9818-f43fed158c76/linked_in_profile',
  },
  {
    title: 'Microsoft Azure Security Engineer Associate (AZ-500)',
    issuer: 'Microsoft',
    date: '2023',
    image: '/image/azure-security-engineer-associate600x600 (1).png',
    verifyLink: 'https://learn.microsoft.com/en-us/users/pariharkamal/credentials/certification-o-/azure-security-engineer?tab=credentials-tab',
  },
];

const experience = [
  {
    title: 'DevOps Engineer',
    company: 'Freelance/Contract Work',
    period: '2024 - Present',
    achievements: [
      'Implemented CI/CD pipelines using Jenkins and GitHub Actions',
      'Managed cloud infrastructure on AWS and Azure platforms',
      'Automated deployment processes using Docker and Kubernetes',
      'Configured monitoring and logging solutions',
      'Collaborated with development teams for seamless deployments',
    ],
    technologies: ['AWS', 'Azure', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Python', 'Git'],
  },
  {
    title: 'DevOps Trainee',
    company: 'KodeKloud',
    period: 'Nov 2024 - Apr 2025 · 6 mos',
    achievements: [
      'Completed intensive 6-month DevOps training program with hands-on real-world projects',
      'Built and deployed CI/CD pipelines using Jenkins and GitLab CI',
      'Gained expertise in containerization with Docker and orchestration using Kubernetes',
      'Worked with cloud platforms like AWS and Azure for scalable infrastructure',
      'Implemented Infrastructure as Code (IaC) using Terraform and Ansible',
      'Set up monitoring and logging solutions with Prometheus, Grafana, and ELK Stack',
      'Mastered version control with Git and GitHub workflows',
      'Gained experience with automation tools like Maven and SonarQube',
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'Git', 'Maven', 'SonarQube'],
  },
];

const education = [
  {
    degree: 'Bachelor of Technology - BTech, Computer Science',
    school: 'Lovely Professional University',
    year: 'Jun 2021 - Jun 2025',
    grade: '7.38 CGPA',
  },
  {
    degree: 'Senior Secondary Education, PCM',
    school: 'Vivek Sr Sec School Bali',
    year: 'Sep 2018 - Jun 2019',
    grade: '93.6%',
  },
];

const projects = [
  {
    title: 'AWS Infrastructure Setup',
    description: 'Designed and implemented scalable AWS infrastructure using EC2, S3, and RDS with automated deployment',
    technologies: ['AWS', 'Terraform', 'Jenkins', 'Docker'],
  },
  {
    title: 'Kubernetes Deployment Pipeline',
    description: 'Built CI/CD pipeline for containerized applications with automated testing and deployment to Kubernetes',
    technologies: ['Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions'],
  },
  {
    title: 'Monitoring Dashboard',
    description: 'Implemented comprehensive monitoring solution with real-time metrics and alerting capabilities',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'AWS CloudWatch'],
  },
];

export default function Resume() {
  return (
    <div className="container py-8 sm:py-12 md:py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12 sm:space-y-16"
      >
        {/* Professional Summary */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Professional Summary</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Dedicated DevOps Engineer with expertise in cloud technologies, automation, and infrastructure management. 
                  Based in Bali, Rajasthan, India, with hands-on experience in AWS, Azure, and Google Cloud Platform. 
                  Skilled in implementing CI/CD pipelines, containerization with Docker and Kubernetes, and infrastructure 
                  as code using Terraform. Passionate about optimizing development workflows and ensuring reliable, 
                  scalable deployments. Strong background in Linux systems administration and automation scripting.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Professional Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.length > 0 ? experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -left-[7px] sm:-left-[9px] top-0" />
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{job.company} • {job.period}</p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="leading-relaxed"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} className="text-xs sm:text-sm">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )) : (
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Please provide your actual work experience details from your CV.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Key Projects</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.length > 0 ? projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )) : (
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Please provide your actual project details from your CV.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Education</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {education.length > 0 ? education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-sm sm:text-base mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-2">{edu.school}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="secondary" className="text-xs sm:text-sm">{edu.year}</Badge>
                      {edu.grade && (
                        <Badge variant="outline" className="text-xs sm:text-sm">Grade: {edu.grade}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )) : (
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Please provide your actual education details from your CV.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Certifications</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.length > 0 ? certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} index={index} />
            )) : (
              <Card className="md:col-span-2 lg:col-span-3">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Please provide your actual certification details from your CV.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Core Skills Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Technical Skills</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {skills.length > 0 ? skills.map((skill, index) => (
              <SkillCard key={index} {...skill} index={index} />
            )) : (
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-center">
                    Please provide your actual technical skills from your CV.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Additional Information</h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-sm sm:text-base mb-3">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Hindi</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">English</span>
                      <span className="text-sm text-muted-foreground">Professional</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-sm sm:text-base mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Cloud Computing</Badge>
                    <Badge variant="outline">Open Source</Badge>
                    <Badge variant="outline">Automation</Badge>
                    <Badge variant="outline">Technology Blogs</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}